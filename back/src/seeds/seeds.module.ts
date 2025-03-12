import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/category/entities/category.entity";
import { Product } from "src/product/entities/product.entity";
import { CategoriesSeed } from "./categories/categories.seeds";
import { ProductsSeed } from "./products/products.seeds";
import { OrderSeed } from "./orders/order.seeds";
import { Order } from "src/order/entities/order.entity";
import { OrderDetail } from "src/order_details/entities/order_detail.entity";
import { User } from "src/user/entities/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([
        Category,
        Product,
        Order,
        OrderDetail,
        User
    ])],
    providers: [
        CategoriesSeed,
        ProductsSeed,
        OrderSeed
    ],
    exports: [
        CategoriesSeed,
        ProductsSeed,
        OrderSeed
    ]
})

export class SeedModule { }