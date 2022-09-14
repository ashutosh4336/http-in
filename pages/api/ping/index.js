import commonHandler from '@/middlewares/commonHandler';
import { loggers } from 'winston';

const handler = commonHandler();

handler.get(async (req, res) => {
  res.status(200).end('PONG');
});

export default handler;
