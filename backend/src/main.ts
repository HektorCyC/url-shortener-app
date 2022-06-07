import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle('URL Shortener')
      .setDescription('Sample URL Shortener Application')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    // Validation pipe added to access validation types
    app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
  