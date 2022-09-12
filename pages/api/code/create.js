import { cacheFetchWithOutTTL } from '@/lib/cache';
import { connect } from '@/lib/mongo';
import { httpDatabase, statusCodeCol } from '@/src/constants/dbConstants';
import { httpStatusCodes } from '@/src/data/statusCodes';
import { ALL_CODES } from '@/src/constants/cacheKeys';

export default async function handler(req, res) {
  const method = req.method;

  if (method !== 'GET') {
    return res.status(405).json({
      status: 405,
      message: 'Method not allowed',
    });
  }

  const getStatusCodesDB = async () => {
    const { db, mongoClient } = await connect(httpDatabase);

    const inertDocuments = httpStatusCodes.map((statusCode) => ({
      ...statusCode,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await db.collection(statusCodeCol).insertMany(inertDocuments);

    const statusCodes = await db.collection(statusCodeCol).find().toArray();

    mongoClient.close();
    return statusCodes;
  };

  const codes = await cacheFetchWithOutTTL(ALL_CODES, getStatusCodesDB);

  return res.status(200).json({
    success: true,
    message: 'Successfully inserted documents.',
    data: codes,
  });
}
