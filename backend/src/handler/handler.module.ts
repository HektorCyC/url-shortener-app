import { Module } from '@nestjs/common';
import { HandlerService } from './service/handler.service';
import { HandlerController } from './controller/handler.controller';
import { DynamooseModule } from 'nestjs-dynamoose';
import { ShortUrlSchema } from './schema/short-url-schema';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'shorturl',
        schema: ShortUrlSchema,
      },
    ]),
  ],
  controllers: [HandlerController],
  providers: [HandlerService]
})
export class HandlerModule { }
