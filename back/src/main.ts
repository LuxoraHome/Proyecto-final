import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UserSeed } from './user/seeder/user.seed';
import { ProductsSeed } from './seeds/products/products.seeds';
import { loggerGlobal } from './middleware/logger.middleware';
import { CategoriesSeed } from './seeds/categories/categories.seeds';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(loggerGlobal);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, 
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Proyecto LUXORA')
    .setDescription('Documentacion de la API - Backend')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  const categorySeeder = app.get(CategoriesSeed);
  await categorySeeder.seedCategories();
  console.log('*** LA INSERCION DE CATEGORIAS FUE EXITOSA ***');

  const userSeeder = app.get(UserSeed);
  await userSeeder.createUserSeeder();
  console.log('*** LA INSERCION DE USUARIOS FUE EXITOSA ***');

  const productsSeed = app.get(ProductsSeed);
  await productsSeed.createSeedProduct();
  console.log('*** LA INSERCION DE PRODUCTOS FUE EXITOSA ***');

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
