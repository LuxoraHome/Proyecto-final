import { Product } from "src/product/entities/product.entity";
import { productsMock } from "../products/products-mock";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
<<<<<<< HEAD
=======
import { Category } from "src/category/entities/category.entity";
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69

@Injectable()
export class ProductsSeed {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
<<<<<<< HEAD
    ) { }

    async seed() {
=======
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) { }

    async findCategories(name: string, type: string, color: string) {
        const findCategory = await this.categoryRepository.findOne({
            where: {
                name: name,
                type: type,
                color: color
            }
        })

        if (!findCategory) {
            throw new Error(`Category name ${name} / type ${type} / color ${color} not found`)
        }
        return findCategory;
    }

    async createSeedProduct() {
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
        const existingProductNames = (await this.productRepository.find()).map(
            (product) => product.name,
        )

        for (const productData of productsMock) {
            if (!existingProductNames.includes(productData.name)) {
<<<<<<< HEAD
                const product = new Product();
                product.name = productData.name;
                product.description = productData.description;
                product.type = productData.type;
                product.price = productData.price;
                product.designer = productData.designer;
                product.image = productData.image;
                product.stock = productData.stock;
                await this.productRepository.save(product);
=======
                const newProduct = new Product();
                newProduct.name = productData.name;
                newProduct.description = productData.description;
                newProduct.type = productData.type;
                newProduct.price = productData.price;
                newProduct.designer = productData.designer;
                newProduct.image = productData.image;
                newProduct.stock = productData.stock;
                newProduct.category = await this.findCategories(
                    productData.categoryName,
                    productData.categoryType,
                    productData.categoryColor
                );
                await this.productRepository.save(newProduct);
            } else {
                return "Ya existen productos"
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
            }
        }
    }
}