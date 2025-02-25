import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Proyecto LUXORA')
    .setDescription('Documentacion de la API - Backend')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const documet = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documet);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
