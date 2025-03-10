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
import { RemoveProductDto } from './dto/removeProduct.dto';
import { CartProductDto } from './dto/cartProduct.dto';

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
      where: { user: { uid: userId } },
      relations: ['cartProducts', 'cartProducts.product'],
    });
  
    if (!cart) {
      cart = this.shoppingCartRepository.create({
        user: { uid: userId }, 
        cartProducts: [], 
        totalPrice: 0,
        shippingCost: 0,
      });
  
      return this.shoppingCartRepository.save(cart);
    }  

    return cart;
  }

  async getCartByUserId(uid: string): Promise<GetCartDto> {
    const cart = await this.findOrCreateCart(uid);

    return {
      // id: cart.id,
      uid: cart.user.uid,
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
    const { uid, productId, quantity } = addToCartDto;
    
    const newCart = await this.findOrCreateCart(uid);

    const product = await this.productsService.findOneById(productId);
    if (!product) throw new NotFoundException('Product not found');

    if (product.stock < quantity) {
      throw new BadRequestException('Not enough stock available');
    }

    let findCartProduct = newCart.cartProducts.find(findCp => findCp.product.id === productId);

    if (findCartProduct) {
      findCartProduct.quantity += quantity;
      await this.cartProductsService.updateCartProductQuantity(findCartProduct, findCartProduct.quantity)
    } else {
      const newCartProduct = await this.cartProductsService.createCartProduct({cartId: newCart.id, productId, quantity}, uid);
      newCart.cartProducts.push(newCartProduct);
    }

    await this.productsService.updateProduct(productId, { stock: product.stock - quantity });

    newCart.totalPrice = newCart.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    await this.shoppingCartRepository.save(newCart);

    return {
      // id: newCart.id,
      uid: uid,
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
      where: { id, user: { uid: userId } }, 
      relations: ['user'],
    });
  
    if (!cart) throw new NotFoundException('Shopping cart not found or not owned by user');
  
    return cart;
  }
  
  async updateCartProductQuantity(updateCartDto: UpdateShoppingCartDto): Promise<GetCartDto> {
    const cart = await this.findOrCreateCart(updateCartDto.uid);
    
    const product = cart.cartProducts.find(cp => cp.product.id === updateCartDto.productId);
    if (!product) throw new NotFoundException("Product Not Found");

    const productInDb = await this.productsService.findOneById(updateCartDto.productId);
    if (!productInDb) throw new NotFoundException("Product not found");

    const previousQuantity = product.quantity;

    if (updateCartDto.quantity <= 0) {
        return await this.removeProductCart({ uid: updateCartDto.uid, productId: updateCartDto.productId });
    }

    product.quantity = updateCartDto.quantity;

    const quantityDifference = updateCartDto.quantity - previousQuantity;
    if (quantityDifference > 0 && productInDb.stock < quantityDifference) {
        throw new BadRequestException('Not enough stock available');
    }
    await this.productsService.updateProduct(updateCartDto.productId, { stock: productInDb.stock - quantityDifference });

    cart.totalPrice = cart.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);

    await this.shoppingCartRepository.save(cart);
    return this.getCartByUserId(updateCartDto.uid);
}


async removeProductCart(removeDto: RemoveProductDto) {
  const cart = await this.findOrCreateCart(removeDto.uid);
  
  const productToRemove = cart.cartProducts.find(cp => cp.product.id === removeDto.productId);
  if (!productToRemove) {
      throw new NotFoundException("Product not found in cart");
  }

  const productInDb = await this.productsService.findOneById(removeDto.productId);
  if (!productInDb) throw new NotFoundException("Product not found");

  const quantityToRestore = productToRemove.quantity;

  await this.cartProductsService.removeCartProduct(productToRemove.id);

  await this.productsService.updateProduct(removeDto.productId, { stock: productInDb.stock + quantityToRestore });

  cart.cartProducts = cart.cartProducts.filter(cartProduct => cartProduct.product.id !== removeDto.productId);
  cart.totalPrice = cart.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);

  await this.shoppingCartRepository.save(cart);

  return this.getCartByUserId(removeDto.uid);
}



async clearCart(uid: string): Promise<GetCartDto> {
  const cart = await this.findOrCreateCart(uid);

  if (cart.cartProducts.length === 0) {
      throw new BadRequestException('Cart is already empty');
  }

  for (const cartProduct of cart.cartProducts) {
      const productInDb = await this.productsService.findOneById(cartProduct.product.id);
      if (productInDb) {
          await this.productsService.updateProduct(cartProduct.product.id, { stock: productInDb.stock + cartProduct.quantity });
      }
  }

  cart.cartProducts = [];
  cart.totalPrice = 0;
  await this.shoppingCartRepository.save(cart);

  return this.getCartByUserId(uid);
}


}
