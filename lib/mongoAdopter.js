import { Db } from 'mongodb';

export default class MongoAdopter {
  client;
  collectionName = '';

  /**
   * @param {Db} client
   * @param {string} collectionName
   */
  constructor(client, collectionName) {
    this.client = client;
    this.collectionName = collectionName;
  }

  async insertOne(data) {
    return this.client.collection(this.collectionName).insertOne(data);
  }

  async insertMany(data) {
    return this.client.collection(this.collectionName).insertMany(data);
  }

  async findOne(query, projection) {
    return this.client
      .collection(this.collectionName)
      .findOne(query, projection);
  }

  async findAll(query, projection) {
    return this.client
      .collection(this.collectionName)
      .find(query)
      .collation(collation)
      .sort(sortOption)
      .project(projection)
      .limit(parseInt(limit))
      .skip(parseInt(skip)).toArray;
  }

  async updateOne(query, data) {
    return {};
  }

  async updateMany(query, data) {
    return {};
  }

  async deleteOne(query) {
    return {};
  }

  async deleteMany(query) {
    return {};
  }

  async count(query) {
    return {};
  }

  async aggregate(query) {
    return {};
  }

  async getWithPagination(query, options) {
    return {};
  }
}
