import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/category/entities/category.entity";
import { Product } from "src/product/entities/product.entity";
import { CategoriesSeed } from "./categories/categories.seeds";
import { ProductsSeed } from "./products/products.seeds";
import { Order } from "src/order/entities/order.entity";
import { OrderDetail } from "src/order_details/entities/order_detail.entity";
import { User } from "src/user/entities/user.entity";
import { OrderDetailSeed } from "./order_details/order_details.seeds";
import { OfferSeed } from "./offers/offers.seeds";
import { Offer } from "src/offer/entities/offer.entity";

@Module({
    imports: [TypeOrmModule.forFeature([
        Category,
        Product,
        Order,
        OrderDetail,
        User,
        Offer
    ])],
    providers: [
        CategoriesSeed,
        ProductsSeed,
        OrderDetailSeed,
        OfferSeed
    ],
    exports: [
        CategoriesSeed,
        ProductsSeed,
        OrderDetailSeed,
        OfferSeed
    ]
})

export class SeedModule { }