import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartProductsService } from "./cartProducts.service";
import { CartProducts } from "./carProducts.entity";


@Module({
  imports: [TypeOrmModule.forFeature([CartProducts])],
  controllers: [],
  providers: [CartProductsService],
  exports: [],
})
export class CartProductsModule{}