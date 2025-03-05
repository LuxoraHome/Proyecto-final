import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CartProducts } from "./carProducts.entity";


@Injectable()
export class CartProductsService {
  constructor(
    @InjectRepository(CartProducts)
    private readonly cartProductsRepository: Repository<CartProducts>,    
  ) {}

  async createCartProducts(product: any){
    const addProduct = this.cartProductsRepository.create(product)
    return await this.cartProductsRepository.save(addProduct)
  }
}