import { connect } from '@/lib/mongo';
import { httpDatabase, clientInfoCol } from '@/src/constants/dbConstants';

export default async function handler(req, res) {
  const method = req.method;
  const clientInfo = req.body;

  if (method !== 'POST') {
    return res.status(405).json({
      status: 422,
      message: 'Method not allowed.',
    });
  }

  const { db, mongoClient } = await connect(httpDatabase);
  await db.collection(clientInfoCol).insertOne(clientInfo);
  mongoClient.close();

  res.status(200).json({
    success: true,
    message: 'Analytics collected.',
  });
}
