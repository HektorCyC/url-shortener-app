import { Schema } from 'dynamoose';

export const ShortUrlSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  longUrl: {
    type: String,
  },
  shortUrl: {
    type: String,
  },
  user: {
    type: String,
  },
  createAt: {
    type: String,
  }
});
