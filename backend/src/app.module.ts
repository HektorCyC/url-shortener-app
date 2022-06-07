import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HandlerModule } from './handler/handler.module';

@Module({
  imports: [HandlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
