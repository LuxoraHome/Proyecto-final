import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { GetCartDto } from './dto/getCart.dto';
import { AddToCartDto } from './dto/addtocart.dto';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get(':id')
  async getCart(@Param('id') userId: string): Promise<GetCartDto> {
    return this.shoppingCartService.getCartByUserId(userId);
  }

  @Post('add')
  async addToCart(@Body() addToCartDto: AddToCartDto): Promise<GetCartDto> {
    return this.shoppingCartService.addProductToCart(addToCartDto);
  }

}
