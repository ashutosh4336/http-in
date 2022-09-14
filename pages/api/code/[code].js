import commonHandler from '@/middlewares/commonHandler';
import { cacheFetchWithOutTTL } from '@/lib/cache';
import { CODE } from '@/src/constants/cacheKeys';
import { statusCodeCol } from '@/src/constants/dbConstants';

const handler = commonHandler();

handler.get(async (req, res) => {
  try {
    const {
      query: { code = '404' },
      mongoDB,
      mDBClient,
    } = req;

    const getStatusCodeDB = async () => {
      let result;

      const codeDetails = await mongoDB
        .collection(statusCodeCol)
        .find({ $text: { $search: code } }, { score: { $meta: 'textScore' } })
        .sort({ score: { $meta: 'textScore' } })
        .limit(1)
        .toArray();

      if (codeDetails.length <= 0) {
        result = await mongoDB.findOne({ code: '404' });
      } else {
        result = codeDetails[0];
      }

      return result;
    };

    const cacheKey = `${CODE}_${code}`;
    const result = await cacheFetchWithOutTTL(cacheKey, getStatusCodeDB);

    res.status(200).json({
      success: true,
      message: 'Successfully fetched code details.',
      data: result,
    });
  } catch (err) {
    console.log(46, err);
    res
      .status(500)
      .json({ success: false, message: 'Internal Server Error', data: null });
  }
});

export default handler;

/**
 * db.getCollection('statuscodes').find({ $text: { $search: "100" } }, { score: { $meta: 'textScore' } }).sort({ score: { $meta: 'textScore' } }).limit(1).toArray();
 */
