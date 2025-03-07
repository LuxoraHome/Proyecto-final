import { forwardRef, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CartProducts } from "./carProducts.entity";
import { ShoppingCart } from "src/shopping-cart/entities/shopping-cart.entity";
import { ProductService } from "src/product/product.service";
import { ShoppingCartService } from "src/shopping-cart/shopping-cart.service";
import { CartProductDto } from "src/shopping-cart/dto/cartProduct.dto";


@Injectable()
export class CartProductsService {
  constructor(
    @InjectRepository(CartProducts)
    private readonly cartProductsRepository: Repository<CartProducts>,
    @Inject(forwardRef(() => ShoppingCartService))
    private readonly shoppingCartService: ShoppingCartService,
    private readonly productsService: ProductService    
  ) {}

  async createCartProduct(cartProductDto: CartProductDto, userId: string): Promise<CartProducts> {
    const { cartId, productId, quantity } = cartProductDto;

    const cart = await this.shoppingCartService.findOneById(cartId, userId);
    if (!cart) throw new NotFoundException('Shopping cart not found or not owned by user');

    const product = await this.productsService.findOneById(productId);
    if (!product) throw new NotFoundException('Product not found');

    const newCartProduct = this.cartProductsRepository.create({
      cart: cart,
      product: product,
      quantity: quantity,
      price: product.price,
    });

    const savedCartProduct = await this.cartProductsRepository.save(newCartProduct);
    return this.cartProductsRepository.findOne({
      where: { id: savedCartProduct.id },
      relations: ['cart'],
    });
    
  }
}
