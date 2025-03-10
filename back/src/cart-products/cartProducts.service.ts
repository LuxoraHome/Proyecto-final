import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartProducts } from './carProducts.entity';
import { ProductService } from 'src/product/product.service';
import { ShoppingCartService } from 'src/shopping-cart/shopping-cart.service';
import { CartProductDto } from 'src/shopping-cart/dto/cartProduct.dto';

@Injectable()
export class CartProductsService {
  constructor(
    @InjectRepository(CartProducts)
    private readonly cartProductsRepository: Repository<CartProducts>,
    @Inject(forwardRef(() => ShoppingCartService))
    private readonly shoppingCartService: ShoppingCartService,
    private readonly productsService: ProductService,
  ) {}

  async createCartProduct(
    cartProductDto: CartProductDto,
    uid: string,
  ): Promise<CartProducts> {
    const { cartId, productId, quantity } = cartProductDto;

    const cart = await this.shoppingCartService.findOneById(cartId, uid);
    if (!cart)
      throw new NotFoundException(
        'Shopping cart not found or not owned by user',
      );

    const product = await this.productsService.findOneById(productId);
    if (!product) throw new NotFoundException('Product not found');

    if (quantity > product.stock) {
      throw new BadRequestException('Not enough stock available');
    }

    await this.productsService.updateProduct(product.id, {
      stock: product.stock - quantity,
    });

    const newCartProduct = this.cartProductsRepository.create({
      cart: cart,
      product: product,
      quantity: quantity,
      price: product.price,
    });

    const savedCartProduct =
      await this.cartProductsRepository.save(newCartProduct);
    return this.cartProductsRepository.findOne({
      where: { id: savedCartProduct.id },
      relations: ['cart'],
    });
  }

  async updateCartProductQuantity(
    cartProduct: CartProducts,
    quantity: number,
  ): Promise<CartProducts> {
    const product = await this.productsService.findOneById(cartProduct.product.id);
    if (!product) throw new NotFoundException('Product not found');
  
    const quantityDifference = quantity - cartProduct.quantity;
  
    if (quantityDifference > 0 && quantityDifference > product.stock) {
      throw new BadRequestException('Not enough stock available');
    }
  
    await this.productsService.updateProduct(product.id, {
      stock: product.stock - quantityDifference,
    });
  
    cartProduct.quantity = quantity;
    return this.cartProductsRepository.save(cartProduct);
  }
  

  async removeCartProduct(cartProductId: string): Promise<void> {
    const cartProduct = await this.cartProductsRepository.findOne({
      where: { id: cartProductId },
      relations: ['product'],
    });

    if (!cartProduct) throw new NotFoundException('Cart product not found');

    await this.productsService.updateProduct(cartProduct.product.id, {
      stock: cartProduct.product.stock + cartProduct.quantity,
    });

    await this.cartProductsRepository.delete(cartProductId);
  }
}
