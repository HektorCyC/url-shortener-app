import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { HandlerModule } from './handler/handler.module';

@Module({
  imports: [
    DynamooseModule.forRoot({
      aws: { region: 'us-east-1' },
      model: {
        create: false,
        suffix: '-table',
      },
    }),
    HandlerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
