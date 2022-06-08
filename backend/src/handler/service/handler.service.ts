import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import HashGenerator from 'src/utils/hash-generator';
import { IShortUrl, UrlKey } from '../model/short-url-interface';
import * as uuid from 'uuid';
import { UrlInputModel } from '../model/url-input-model';
@Injectable()
export class HandlerService {
  constructor(
    @InjectModel('shorturl')
    private readonly model: Model<IShortUrl, UrlKey>,
  ) { }

  findById(id: UrlKey) {
    return this.model.get(id);
  }

  create(input: UrlInputModel) {
    const hashId: string = HashGenerator.generate();
    return this.model.create({
      ...input,
      id: hashId, // Add Hash id as index... easier to find, less resources billed.
      longUrl: input.longUrl,
      shortUrl: hashId,
      user: 'anonymous', // ToDo: Implement Auth??
      createAt: new Date().toISOString(),
    });
  }

  update(id: UrlKey, input: IShortUrl) {
    return this.model.update(id, input);
  }

  remove(id: UrlKey) {
    return this.model.delete(id)
  }
}
