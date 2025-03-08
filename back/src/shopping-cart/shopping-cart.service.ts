import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { Repository } from 'typeorm';
import { ProductService } from 'src/product/product.service';
import { CartProductsService } from 'src/cart-products/cartProducts.service';
import { UserService } from 'src/user/user.service';
import { GetCartDto } from './dto/getCart.dto';
import { AddToCartDto } from './dto/addtocart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { CartProducts } from 'src/cart-products/carProducts.entity';
import { RemoveCartDto } from './dto/removecart.dto';

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
    if (!user) throw new NotFoundException('User not found');

    let cart = await this.shoppingCartRepository.findOne({
      where: { user: { id: userId } },
      relations: ['cartProducts', 'cartProducts.product'],
    });
  
    if (!cart) {
      const newCart = this.shoppingCartRepository.create({
        user: { id: userId }, 
        cartProducts: [], 
        totalPrice: 0,
        shippingCost: 0,
      });
  
      await this.shoppingCartRepository.save(newCart);
    }  

    return cart;
  }

  async getCartByUserId(userId: string): Promise<GetCartDto> {
    const cart = await this.findOrCreateCart(userId);

    return {
      id: cart.id,
      userId: cart.user.id,
      cartProducts: cart.cartProducts.map(cartProduct => ({
        id: cartProduct.id,
        cartId: cart.id,
        productId: cartProduct.product.id,
        quantity: cartProduct.quantity,
        price: cartProduct.price,
      })),
      totalPrice: cart.totalPrice,
      shippingCost: cart.shippingCost,
    };
  }

  async addProductToCart(addToCartDto: AddToCartDto): Promise<GetCartDto> {
    const { userId, productId, quantity } = addToCartDto;
    
    const newCart = await this.findOrCreateCart(userId);

    const product = await this.productsService.findOneById(productId);
    if (!product) throw new NotFoundException('Product not found');

    if (product.stock < quantity) {
      throw new BadRequestException('Not enough stock available');
    }

    let findCartProduct = newCart.cartProducts.find(findCp => findCp.product.id === productId);

    if (findCartProduct) {
      findCartProduct.quantity += quantity;
    } else {
      const newCartProduct = await this.cartProductsService.createCartProduct({cartId: newCart.id, productId, quantity}, userId);
      newCart.cartProducts.push(newCartProduct);
    }

    newCart.totalPrice = newCart.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    await this.shoppingCartRepository.save(newCart);

    return {
      id: newCart.id,
      userId: userId,
      cartProducts: newCart.cartProducts.map(cartProduct => ({
        id: cartProduct.id,
        cartId: newCart.id,
        productId: cartProduct.product.id,
        quantity: cartProduct.quantity,
        price: cartProduct.price,
      })),
      totalPrice: newCart.totalPrice,
      shippingCost: newCart.shippingCost,
    };
  }

  async findOneById(id: string, userId: string) {
    const cart = await this.shoppingCartRepository.findOne({
      where: { id, user: { id: userId } }, 
      relations: ['user'],
    });
  
    if (!cart) throw new NotFoundException('Shopping cart not found or not owned by user');
  
    return cart;
  }
  
  async updateCartProductQuantity(updateCartDto: UpdateShoppingCartDto):Promise<GetCartDto>{
    const cart = await this.findOrCreateCart(updateCartDto.userId);
    const product = cart.cartProducts.find(cp => cp.product.id === updateCartDto.productId)
    if(!product)throw new NotFoundException("Product Not Found");

    if(updateCartDto.quantity <= 0) {
      return this.removeProductCart({userId: updateCartDto.userId, productId: updateCartDto.productId})
    }
    
    product.quantity = updateCartDto.quantity

    cart.totalPrice = cart.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);

    await this.shoppingCartRepository.save(cart)
    return this.getCartByUserId(updateCartDto.userId)

  }

  async removeProductCart(removeDto: RemoveCartDto){
    const cart = await this.findOrCreateCart(removeDto.userId);
    
    const initialLength = cart.cartProducts.length;
    
    cart.cartProducts= cart.cartProducts.filter(cartProduct => cartProduct.product.id !== removeDto.productId);

    if (cart.cartProducts.length === initialLength) {
      throw new NotFoundException("Product not found in cart");
    }

    cart.totalPrice = cart.cartProducts.reduce((total, product) => total + product.price * product.quantity,0);

    await this.shoppingCartRepository.save(cart);
    return this.getCartByUserId(removeDto.userId)
  }

  async clearCart(userId: string): Promise<GetCartDto> {
    const cart = await this.findOrCreateCart(userId);
    cart.cartProducts = [];
    cart.totalPrice = 0;

    await this.shoppingCartRepository.save(cart);
    return this.getCartByUserId(userId);
  }

}
