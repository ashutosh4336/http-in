import redisClient from '@/lib/redis';
import { script } from './bucket';

export default async function rateLimit(req, res, next) {
  try {
    const urlObj = new URL(req.url, 'https://thehttp.in/');
    const urlPath = urlObj.pathname;
    const key = `${urlPath}:${req.method}`;

    logger.info(`Rate Limit Middleware : key - ${key}`);

    const { allowed, remaining } = await check(key);

    if (!allowed) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests',
        data: null,
        remaining,
      });
    }

    return next();
  } catch (err) {
    logger.error('Error in DB Middleware', err);
  }
}

const check = async (key) => {
  try {
    const rate = 1;
    const capacity = rate * 3;
    const now = Math.floor(new Date().getTime() / 1000);
    const requested = 1;

    const keys = [`${key}.tokens`, `${key}.timestamp`];
    const args = [rate, capacity, now, requested];

    const [allowed, remaining] = await redisClient.eval(
      script,
      keys.length,
      ...keys,
      ...args
    );

    return { allowed: allowed === 1, remaining };
  } catch (err) {
    throw new Error(err);
  }
};
