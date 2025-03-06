import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { Repository } from 'typeorm';
import { ProductService } from 'src/product/product.service';
import { CartProductsService } from 'src/cart-products/cartProducts.service';
import { UserService } from 'src/user/user.service';
import { GetCartDto } from './dto/getCart.dto';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectRepository(ShoppingCart)
    private readonly shoppingCartRepository: Repository<ShoppingCart>,
    private readonly productsService: ProductService,
    private readonly cartProductsService: CartProductsService,
    private readonly userService: UserService
  ){}

  private async findOrCreateCart(userId: string): Promise<ShoppingCart> {
    const user = await this.userService.findOneById(userId);
    if (!user) throw new NotFoundException('Usuario no encontrado');

    let cart = await this.shoppingCartRepository.findOne({
      where: { user: { id: userId } },
      relations: ['cartProducts', 'cartProducts.product'],
    });
  
    if (!cart) {
      cart = this.shoppingCartRepository.create({
        user: { id: userId }, 
        cartProducts: [], 
        totalPrice: 0,
        shippingCost: 0,
      });
  
      await this.shoppingCartRepository.save(cart);
    }
  
    return cart;
  }

  async getCart(userId: string): Promise<GetCartDto> {
    const cart = await this.findOrCreateCart(userId);

    return {
      id: cart.id,
      userId: cart.user.id,
      cartProducts: cart.cartProducts.map(cartProduct => ({
        id: cartProduct.id,
        productId: cartProduct.product.id,
        quantity: cartProduct.quantity,
        price: cartProduct.price,
      })),
      totalPrice: cart.totalPrice,
      shippingCost: cart.shippingCost,
    };
  }

  async addToCart(userId: string, productId: string, quantity: number): Promise<GetCartDto> {
    const cart = await this.findOrCreateCart(userId);
    const product = await this.productsService.findOneById(productId);
    if (!product) throw new NotFoundException('Producto no encontrado');

    let cartProduct = cart.cartProducts.find(cp => cp.product.id === productId);

    if (cartProduct) {
      cartProduct.quantity += quantity;
    } else {
      cartProduct = await this.cartProductsService.createCartProduct(cart, productId, quantity);
      cart.cartProducts.push(cartProduct);
    }

    cart.totalPrice = cart.cartProducts.reduce((total, item) => total + item.price * item.quantity, 0);
    await this.shoppingCartRepository.save(cart);

    return {
      id: cart.id,
      userId: userId,
      cartProducts: cart.cartProducts.map(item => ({
        id: item.id,
        productId: item.product.id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: cart.totalPrice,
      shippingCost: cart.shippingCost,
    };
  }


  update(id: number, updateShoppingCartDto: UpdateShoppingCartDto) {
    return `This action updates a #${id} shoppingCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingCart`;
  }
}
