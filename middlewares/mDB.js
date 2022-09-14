import { MongoClient, Db } from 'mongodb';
import { httpDatabase, statusCodeCol } from '@/src/constants/dbConstants';

// import { httpStatusCodes } from '@/src/data/statusCodes';

const {
  MONGODB_PASSWORD: mPassword,
  MONGODB_USER: mUser,
  MONGODB_HOST: mHost,
  MONGODB_PROTOCOL: mProtocol,
} = process.env;

const mongoLocal = 'mongodb://localhost:27017';

export const mongoURI =
  `${mProtocol}://${mUser}:${mPassword}@${mHost}` || mongoLocal;

const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000,
});

export async function setupDBIndex(db) {
  try {
    db.collection(statusCodeCol).createIndex({ code: 1 });
    db.collection(statusCodeCol).createIndex({
      code: 'text',
      description: 'text',
    });

    //   db.collection('newsLetterSubscriber').createIndex(
    //     { email: 1 },
    //     { unique: true }
    //   );

    //   db.collection('loggedInUsers').createIndex(
    //     { _ts: 1 },
    //     { expireAfterSeconds: 3600 }
    //   );
  } catch (err) {
    console.error(err);
  }
}

export default async function mDB(req, res, next) {
  try {
    const isConnected = client?.topology?.s?.state === 'connected';
    const now = Date.now();
    logger.info(
      `MongoDB ${isConnected ? 'is already Connected.' : 'Connecting.'}`
    );

    if (!isConnected) {
      await client.connect();
      const connectedTime = Date.now();

      logger.info('Connected to MongoDB');
      logger.info(
        'Time taken to connect to MongoDB',
        (connectedTime - now) / 1000
      );
    }

    const mDBClient = client;
    /**
     * @type {Db}
     */
    const mongoDB = client.db(httpDatabase);

    req.mDBClient = mDBClient;
    req.mongoDB = mongoDB;

    await setupDBIndex(mongoDB);

    return next();
  } catch (err) {
    console.error('Error in DB Middleware', err);
  }
}

/**
 * db.products.createIndex({ code: "text", description: "text" })
 *
 *
 * db.products.find({
 *  $text: {
 *   $search: "100"
 * }
 * }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } })
 */
