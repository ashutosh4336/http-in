import Redis from 'ioredis';

const redisEndPoint = process.env.REDIS_ENDPOINT || 'localhost';
const redisPort = process.env.REDIS_PORT || 6379;
const redisPassword = process.env.REDIS_PASSWORD || '';
const redisRegion = process.env.REDIS_REGION || 'us-east-1';

const redisURL = `rediss://:${redisPassword}@${redisEndPoint}:${redisPort}`;

const redisClient = new Redis(redisURL);

export default redisClient;
