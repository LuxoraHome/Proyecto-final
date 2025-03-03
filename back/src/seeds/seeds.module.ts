import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/category/entities/category.entity";
import { Product } from "src/product/entities/product.entity";
import { CategoriesSeed } from "./categories/categories.seeds";
import { ProductsSeed } from "./products/products.seeds";

@Module({
    imports: [TypeOrmModule.forFeature([
        Category,
        Product
    ])],
    providers: [
        CategoriesSeed,
        ProductsSeed
    ],
    exports: [
        CategoriesSeed,
        ProductsSeed
    ]
})

export class SeedModule { }