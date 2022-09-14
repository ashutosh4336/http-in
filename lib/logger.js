import { nanoid } from 'nanoid';
import { isPlainObject } from 'is-plain-object';
import { createLogger, format, transports } from 'winston';
import { excludedKeysList } from '@/src/data/loggerExclude';

const { combine, timestamp, printf } = format;
require('winston-daily-rotate-file');
require('winston-mongodb');

const mongoLogURI =
  'mongodb://localhost:27017/http-in' || process.env.MONGO_LOGGER;
const serviceName = 'http-in-logs'; // Set the service name
const excludedKeys =
  process.env.NODE_ENV === 'production' ? excludedKeysList : [];

const customFormat = printf((info) => {
  try {
    let finalMessage = [];

    const rid = nanoid();

    let message = deepRegexReplace(info.message);
    message = isPlainObject(message) ? [message] : message;

    for (var i = 0; message && i < message.length; i++) {
      let item =
        typeof message[i] === 'object'
          ? JSON.stringify(message[i])
          : message[i];

      finalMessage.push(item);
    }

    finalMessage = finalMessage.join(' | ');

    return rid
      ? `${info.timestamp} [${info.service}] ${info.level} [request-id:${rid}]: ${finalMessage}`
      : `${info.timestamp} [${info.service}] ${info.level} [request-id:0000]: ${finalMessage}`;
  } catch (error) {
    return `${new Date().toISOString()} [${serviceName}] error [request-id:1111]: LoggerError ${error}`;
  }
});

const deepRegexReplace = (value, singleKey = '') => {
  try {
    const parsedValue = JSON.parse(value);

    if (typeof parsedValue === 'object') {
      value = parsedValue;
    }
  } catch (e) {}
  try {
    if (typeof value === 'undefined' || typeof excludedKeys === 'undefined')
      return value || '';

    if (Array.isArray(value)) {
      for (const [i, v] of value.entries()) {
        value[i] = deepRegexReplace(v);
      }

      return value;
    } else if (isPlainObject(value)) {
      for (let key in value) {
        if (value.hasOwnProperty(key))
          value[key] = deepRegexReplace(value[key], key);
      }

      return value;
    } else {
      if (excludedKeys.includes(singleKey.toLowerCase())) return '[REDACTED]';
      else return value;
    }
  } catch (e) {
    console.error('Logger deepRegexReplace', e);
    return value;
  }
};

const winstonLogger = createLogger({
  format: combine(
    format((info) => {
      info.level = info.level.toUpperCase();
      return info;
    })(),
    timestamp(),
    customFormat
  ),

  level: 'debug',

  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), customFormat),
    }),
    new transports.MongoDB({
      db: mongoLogURI,
      collection: 'logs',
      level: 'info',
      capped: true,
    }),

    // new transports.DailyRotateFile({
    //   name: 'file',
    //   datePattern: 'YYYY-MM-DD',
    //   filename: path.join(
    //     __dirname,
    //     '../logs',
    //     `${serviceName}_%DATE%.log`
    //   ),
    //   // zippedArchive: true,
    //   maxFiles: '14d',
    //   maxSize: '20m',
    //   timestamp: true,
    // }),
  ],
  defaultMeta: { service: serviceName },
});

const wrapper = (original) => {
  return (...args) => {
    const _transformedArgs = [];

    args.forEach((arg) => {
      if (typeof arg == 'object') {
        if (arg instanceof Error) {
          _transformedArgs.push(arg.stack);
        } else {
          _transformedArgs.push(JSON.stringify(arg));
        }
      } else {
        _transformedArgs.push(arg);
      }
    });
    return original(_transformedArgs);
  };
};

winstonLogger.error = wrapper(winstonLogger.error);
winstonLogger.warn = wrapper(winstonLogger.warn);
winstonLogger.info = wrapper(winstonLogger.info);
winstonLogger.debug = wrapper(winstonLogger.debug);

const httpLogger = {
  log: function (level, message, ...args) {
    winstonLogger.log(level, message, ...args);
  },
  error: function (message, ...args) {
    winstonLogger.error(message, ...args);
  },
  warn: function (message, ...args) {
    winstonLogger.warn(message, ...args);
  },
  info: function (message, ...args) {
    winstonLogger.info(message, ...args);
  },
  debug: function (message, ...args) {
    winstonLogger.debug(message, ...args);
  },
};

export default httpLogger;
