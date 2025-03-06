import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { GetCartDto } from './dto/getCart.dto';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get(':id')
  async getCart(@Param('id') userId: string): Promise<GetCartDto> {
    return this.shoppingCartService.getCart(userId);
  }

  @Post('add')
  async addToCart(
    @Body('userId') userId: string,
    @Body('productId') productId: string,
    @Body('quantity') quantity: number,
  ): Promise<GetCartDto> {
    return this.shoppingCartService.addToCart(userId, productId, quantity);
  }

}
