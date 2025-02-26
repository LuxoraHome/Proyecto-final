import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import typeOrmConfig from "./config/typeOrm"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig]
    }),
    TypeOrmModule.forRootAsync({

      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get("typeorm")
    }),
    ProductModule,
    UserModule
  ],

  controllers: [],
  providers: [],
})

export class AppModule { }





// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigService } from '@nestjs/config';
// import { ConfigModule } from '@nestjs/config';

// import { ProductModule } from './product/product.module';

// import { UserModule } from './user/user.module';

// import typeOrmConfig from "./config/typeOrm"

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       load: [typeOrmConfig]
//     }),
//     TypeOrmModule.forRootAsync({

//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => configService.get("typeorm")
//     }),
//     ProductModule],

//     inject: [ConfigService],
//     useFactory: (configService: ConfigService) => configService.get("typeorm")
//   }),
//     UserModule],

//   controllers: [],
//   providers: [],
// })
// export class AppModule { }
