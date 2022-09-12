import redisClient from '@/lib/redis';

const checkDataType = (value) => {
  if (value === null) return 'null';

  if (typeof value === 'undefined') return 'undefined';
  else if (typeof value === 'string' && Array.isArray(value)) return 'array';
  else if (typeof value === 'object') return 'object';
  else if (typeof value === 'string') return 'string';
  else if (typeof value === 'number') return 'number';
  else if (typeof value === 'boolean') return 'boolean';
};

/**
 *
 * @param {String} key
 * @param {() => T} fetcher
 * @param {Number} ttl
 */
const cacheFetchWithTTL = async (key, fetcher, ttl) => {
  try {
    const existingValue = await get(key);

    if (!!existingValue) return existingValue;

    console.log('Cache Miss. ', new Date());

    const value = await fetcher();

    setWithTTL(key, value, ttl);

    return value;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 * @param {String} key
 * @param {() => T} fetcher
 */
const cacheFetchWithOutTTL = async (key, fetcher) => {
  try {
    const existingValue = await get(key);

    if (!!existingValue) return existingValue;

    console.log('Cache Miss. ', new Date());

    const value = await fetcher();

    setWithoutTTL(key, value);

    return value;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 * @param {String} key
 * @param {any} value
 * @param {Number} ttl
 */
const setWithTTL = async (key, value, ttl) => {
  try {
    let valueToSet;

    if (!key || !value) throw new Error('Invalid key or value');

    const dataType = checkDataType(value);

    if (['null', 'undefined'].includes(dataType)) {
      throw new Error('Invalid key or value');
    } else if (['array', 'object'].includes(dataType)) {
      valueToSet = JSON.stringify(value);
    } else if (['string', 'number', 'boolean'].includes(dataType)) {
      valueToSet = value.toString();
    }

    return await redisClient.set(key, valueToSet, 'EX', ttl);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 * @param {String} key
 * @param {any} value
 * @param {Number} ttl
 */
const setWithoutTTL = async (key, value) => {
  try {
    let valueToSet;

    if (!key || !value) throw new Error('Invalid key or value');

    const dataType = checkDataType(value);

    if (['null', 'undefined'].includes(dataType)) {
      throw new Error('Invalid key or value');
    } else if (['array', 'object'].includes(dataType)) {
      valueToSet = JSON.stringify(value);
    } else if (['string', 'number', 'boolean'].includes(dataType)) {
      valueToSet = value.toString();
    }

    return await redisClient.set(key, valueToSet);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 * @param {String} key
 */
const get = async (key) => {
  let value;
  try {
    value = await redisClient.get(key);
    if (!value) return null;

    console.log('Cache Hit. ', new Date());

    return JSON.parse(value);
  } catch (err) {
    if (err.name === 'SyntaxError') return value;

    console.error(err);
  }
};

/**
 *
 * @param {String} key
 */
const del = async (key) => {
  try {
    await redisClient.del(key);
  } catch (err) {
    throw new Error(err);
  }
};

export {
  cacheFetchWithTTL,
  cacheFetchWithOutTTL,
  setWithTTL,
  setWithoutTTL,
  get,
  del,
};
