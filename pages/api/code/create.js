import commonHandler from '@/middlewares/commonHandler';
import { cacheFetchWithOutTTL } from '@/lib/cache';
import { statusCodeCol } from '@/src/constants/dbConstants';
import { httpStatusCodes } from '@/src/data/statusCodes';
import { ALL_CODES } from '@/src/constants/cacheKeys';

const handler = commonHandler();

handler.get(async (req, res) => {
  try {
    // Remove only if it is done by owner
    // to prevent anonymous users from creating codes

    return res.status(200).json({
      success: true,
      message: 'Successfully fetched code details.',
      data: {},
    });

    const { mongoDB } = req;

    const getStatusCodesDB = async () => {
      const inertDocuments = httpStatusCodes.map((statusCode) => ({
        ...statusCode,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));

      await mongoDB.collection(statusCodeCol).insertMany(inertDocuments);

      const statusCodes = await mongoDB
        .collection(statusCodeCol)
        .find()
        .toArray();

      return statusCodes;
    };

    const codes = await cacheFetchWithOutTTL(ALL_CODES, getStatusCodesDB);

    return res.status(200).json({
      success: true,
      message: 'Successfully inserted documents.',
      data: codes,
    });
  } catch (err) {
    console.log('Error while creating data', err);
    res
      .status(500)
      .json({ success: false, message: 'Internal Server Error', data: null });
  }
});

export default handler;
