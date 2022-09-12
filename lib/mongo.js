import { MongoClient } from 'mongodb';

const {
  MONGODB_PASSWORD: mPassword,
  MONGODB_USER: mUser,
  MONGODB_HOST: mHost,
  MONGODB_PROTOCOL: mProtocol,
} = process.env;

const mongoLocal = 'mongodb://localhost:27017';

const mongoURI = `${mProtocol}://${mUser}:${mPassword}@${mHost}` || mongoLocal;

const mongoClient = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async (mDatabase) => {
  await mongoClient.connect();

  console.log('Connected to MongoDB');

  const db = mongoClient.db(mDatabase);

  return { db, mongoClient };
};

class MongoDBClient {
  mongoClient;
  mongoURI;

  constructor() {
    mongoURI = `${mProtocol}://${mUser}:${mPassword}@${mHost}` || mongoLocal;

    this.mongoClient = new MongoClient(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async connect(mDatabase) {
    await mongoClient.connect();

    console.log('Connected to MongoDB');

    const db = mongoClient.db(mDatabase);

    return { db, mongoClient };
  }
}

export { connect };
