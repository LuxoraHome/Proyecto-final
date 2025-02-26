import { Product } from "src/product/entities/product.entity";
import { productsMock } from "../products/products-mock";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ProductsSeed {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }

    async seed() {
        const existingProductNames = (await this.productRepository.find()).map(
            (product) => product.name,
        )

        for (const productData of productsMock) {
            if (!existingProductNames.includes(productData.name)) {
                const product = new Product();
                product.name = productData.name;
                product.description = productData.description;
                product.type = productData.type;
                product.price = productData.price;
                product.designer = productData.designer;
                product.image = productData.image;
                product.stock = productData.stock;
                await this.productRepository.save(product);
            }
        }
    }
}