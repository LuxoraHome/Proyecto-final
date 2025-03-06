import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CartProducts } from "./carProducts.entity";
import { ShoppingCart } from "src/shopping-cart/entities/shopping-cart.entity";
import { ProductService } from "src/product/product.service";


@Injectable()
export class CartProductsService {
  constructor(
    @InjectRepository(CartProducts)
    private readonly cartProductsRepository: Repository<CartProducts>,
    private readonly productsService: ProductService    
  ) {}

  async createCartProduct(cart: ShoppingCart, productId: string, quantity: number): Promise<CartProducts> {
    const product = await this.productsService.findOneById(productId);
    if (!product) throw new NotFoundException('Product not found');

    const cartProduct = this.cartProductsRepository.create({
      cart,
      product,
      quantity,
      price: product.price,
    });

    const savedCartProduct = await this.cartProductsRepository.save(cartProduct);
    return this.cartProductsRepository.findOne({
      where: { id: savedCartProduct.id },
      relations: ['cart'],
    });
    
  }
}
