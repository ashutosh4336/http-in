import { Db } from 'mongodb';
import commonHandler from '@/middlewares/commonHandler';
import { cacheFetchWithOutTTL } from '@/lib/cache';
import { statusCodeCol } from '@/src/constants/dbConstants';
import { CODE } from '@/src/constants/cacheKeys';

const handler = commonHandler();

handler.get(async (req, res) => {
  const { mongoDB, mDBClient } = req;
  try {
    let value;
    let { limit = 10, page = 1, searchPhrase = '' } = req.query;

    limit = parseInt(limit, 10) || 1;
    page = parseInt(page, 10) || 1;
    const skip = (page - 1) * limit;

    if (skip % 10 !== 0 || limit % 10 !== 0) {
      return res.status(405).json({
        status: 422,
        message: 'Number of items and skip should be multiple of 10.',
      });
    }

    if (searchPhrase.length > 0) {
      searchPhrase = searchPhrase.trim();
      value = await getSearchResFromDB(mongoDB, {
        searchPhrase,
        limit,
        skip,
        page,
      });
    } else {
      const getStatusCodesDB = async () => {
        const codesPromise = mongoDB
          .collection(statusCodeCol)
          .find()
          .skip(skip)
          .limit(limit)
          .toArray();

        const codesCountPromise = mongoDB
          .collection(statusCodeCol)
          .countDocuments();

        const [codes, codesCount] = await Promise.all([
          codesPromise,
          codesCountPromise,
        ]);

        return {
          results: codes,
          page,
          limit,
          totalPages: Math.ceil(codesCount / limit),
          totalResults: codesCount,
        };
      };

      const cacheKey = `${CODE}_${skip}_${limit}`;
      value = await cacheFetchWithOutTTL(cacheKey, getStatusCodesDB);
    }

    if (!value) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "We couldn't fetch the details you requested.",
      });
    }

    res.status(200).json({
      success: true,
      message: 'HTTP status codes fetched successfully.',
      data: value,
    });
  } catch (err) {
    console.error(err);
  } finally {
    // console.log(`Closing MongoDB connection.`);
    // mDBClient.close();
    // console.log(`MongoDB connection closed.`);
  }
});

/**
 *
 * @param {Db} mongoDB
 * @param {Object} options
 * @returns
 */
const getSearchResFromDB = async (mongoDB, options) => {
  const { searchPhrase: searchTerm, limit, skip, page } = options;

  const searchResPromise = mongoDB
    .collection(statusCodeCol)
    .find({ $text: { $search: searchTerm } }, { score: { $meta: 'textScore' } })
    .sort({ score: { $meta: 'textScore' } })
    .skip(skip)
    .limit(limit)
    .toArray();

  const searchCountPromise = mongoDB.collection(statusCodeCol).countDocuments({
    $text: { $search: searchTerm },
  });

  const [searchRes, searchCount] = await Promise.all([
    searchResPromise,
    searchCountPromise,
  ]);

  return {
    results: searchRes,
    page,
    limit,
    totalPages: Math.ceil(searchCount / limit),
    totalResults: searchCount,
  };
};

export default handler;
