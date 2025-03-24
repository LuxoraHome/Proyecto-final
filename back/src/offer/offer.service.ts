import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './entities/offer.entity';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Product } from 'src/product/entities/product.entity';
import { ResponseOfferDto } from './dto/response-offer.dto';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer)
    private offersRepository: Repository<Offer>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createOfferDto: CreateOfferDto): Promise<ResponseOfferDto> {
    const { productName, productDiscount, startDate, endDate } = createOfferDto;

    // Buscar el producto en la base de datos
    const product = await this.productRepository.findOne({
      where: {
        name: productName,
      },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    // Calcular el precio final con el descuento
    const finalPrice = product.price - (product.price * productDiscount) / 100;

    // Crear una nueva oferta en la base de datos
    const newOffer = this.offersRepository.create({
      productId: product.id,
      productName: product.name,
      priceProduct: product.price,
      discountPriceProduct: productDiscount,
      finalPriceProduct: finalPrice,
      startOfferDate: startDate,
      endOfferDate: endDate,
    });

    // Guardar la oferta en la base de datos
    const savedOffer = await this.offersRepository.save(newOffer);

    // Mapear la entidad Offer a ResponseOfferDto
    const response: ResponseOfferDto = {
      id: savedOffer.id,
      productId: savedOffer.productId,
      productName: savedOffer.productName,
      price: savedOffer.priceProduct,
      discount: savedOffer.discountPriceProduct,
      finalPrice: savedOffer.finalPriceProduct,
      startDate: savedOffer.startOfferDate,
      endDate: savedOffer.endOfferDate,
    };

    return response;
  }

  async findAll(): Promise<Offer[]> {
    return this.offersRepository.find();
  }

  async findOne(id: string): Promise<Offer> {
    const offer = await this.offersRepository.findOne({ where: { id } });
    if (!offer) {
      throw new NotFoundException(`Offer with ID ${id} not found`);
    }
    return offer;
  }

  async update(id: string, updateOfferDto: UpdateOfferDto): Promise<Offer> {
    const offer = await this.findOne(id);
    this.offersRepository.merge(offer, updateOfferDto);
    return this.offersRepository.save(offer);
  }

  async remove(id: string): Promise<void> {
    const offer = await this.findOne(id);
    await this.offersRepository.remove(offer);
  }
}
