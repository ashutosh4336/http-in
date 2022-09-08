import { cacheFetchWithOutTTL } from '@/tools/cache';
import { connect } from '@/tools/mongo';
import { httpDatabase, statusCodeCol } from '@/src/constants/dbConstants';
import { CODE } from '@/src/constants/cacheKeys';

export default async function handler(req, res) {
  const { limit = 10, skip = 0, searchPhrase = '' } = req.query;
  const method = req.method;

  if (method !== 'GET') {
    return res.status(405).json({
      status: 405,
      message: 'Method not allowed',
    });
  }

  const getStatusCodesDB = async () => {
    const { db, mongoClient } = await connect(httpDatabase);

    const codes = await db
      .collection(statusCodeCol)
      .find({})
      .limit(limit)
      .skip(skip)
      .toArray();

    mongoClient.close();

    return codes;
  };

  const cacheKey = `${CODE}_${skip}_${limit}`;
  const value = await cacheFetchWithOutTTL(cacheKey, getStatusCodesDB);

  console.log(18, value);

  if (!value) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "We couldn't fetch the details you requested.",
    });
  }

  res.status(200).json({
    success: true,
    data: value,
    message: 'HTTP status codes fetched successfully.',
  });
}
