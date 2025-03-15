import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/product/entities/product.entity";
import { Repository } from "typeorm";
import { offersMock } from "./offers-mock";
import { Offer } from "src/offer/entities/offer.entity";

@Injectable()
export class OfferSeed {

    constructor(
        @InjectRepository(Offer)
        private readonly offerRepository: Repository<Offer>,
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }

    async offerSeed() {


        for (const offerData of offersMock) {

            // Buscar el producto en la base de datos
            const product = await this.productRepository.findOne({
                where: {
                    name: offerData.productName
                }
            });

            if (!product) {
                throw new Error('Product not found');
            }

            // Calcular el precio final con el descuento
            const finalPrice = product.price - (product.price * offerData.discountPriceProduct) / 100;

            // Crear una nueva oferta en la base de datos
            const newOffer = this.offerRepository.create({
                productId: product.id,
                productName: product.name,
                priceProduct: product.price,
                discountPriceProduct: offerData.discountPriceProduct,
                finalPriceProduct: finalPrice,
                startOfferDate: offerData.startOfferDate,
                endOfferDate: offerData.endOfferDate,
            });

            // Guardar la oferta en la base de datos
            await this.offerRepository.save(newOffer);

        }
    }
}