import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UserSeed } from './user/seeder/user.seed';
import { ProductsSeed } from './seeds/products/products.seeds';
import { loggerGlobal } from './middleware/logger.middleware';
<<<<<<< HEAD
=======
import { CategoriesSeed } from './seeds/categories/categories.seeds';
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(loggerGlobal);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Proyecto LUXORA')
    .setDescription('Documentacion de la API - Backend')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
<<<<<<< HEAD
  const documet = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documet);
=======
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  const categorySeeder = app.get(CategoriesSeed);
  await categorySeeder.seedCategories();
  console.log('*** LA INSERCION DE CATEGORIAS FUE EXITOSA ***');
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69

  const userSeeder = app.get(UserSeed);
  await userSeeder.createUserSeeder();
  console.log('*** LA INSERCION DE USUARIOS FUE EXITOSA ***');

  const productsSeed = app.get(ProductsSeed);
<<<<<<< HEAD
  await productsSeed.seed();
=======
  await productsSeed.createSeedProduct();
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  console.log('*** LA INSERCION DE PRODUCTOS FUE EXITOSA ***');

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
