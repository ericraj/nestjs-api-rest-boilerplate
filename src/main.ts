import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('NestJS REST API Boilerplate')
    .setDescription('The NestJS REST API Boilerplate docs')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);

  await app.listen(configService.get('PORT'));
  const appUrl = await app.getUrl();
  const logger = new Logger();
  logger.log(`App is running on ${appUrl}`);
}
bootstrap();
