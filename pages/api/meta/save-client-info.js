import commonHandler from '@/middlewares/commonHandler';
import { clientInfoCol } from '@/src/constants/dbConstants';

const handler = commonHandler();

handler.post(async (req, res) => {
  const clientInfo = req.body;
  const { mongoDB } = req;
  await mongoDB.collection(clientInfoCol).insertOne(clientInfo);

  res.status(200).json({
    success: true,
    message: 'Analytics collected.',
  });
});

export default handler;
