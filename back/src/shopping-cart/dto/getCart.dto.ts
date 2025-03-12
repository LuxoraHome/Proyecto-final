import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { CartProductDto } from './cartProduct.dto';

export class GetCartDto {
  @ApiProperty({
    example: 'b1a2b3c4-d5e6-7890-1234-56789abcdef0',
    description: 'Cart ID'
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    description: 'User ID'
  })
  @IsUUID()
  @IsNotEmpty()
  uid: string;

  @ApiProperty({
    type: () => [CartProductDto],
    description: 'List of products in the cart'
  })
  cartProducts: CartProductDto[];

  @ApiProperty({
    example: 149.97,
    description: 'Total price of all products in the cart'
  })
  @IsNumber()
  @Min(0, { message: 'El total no puede ser negativo' })
  totalPrice: number;

  @ApiProperty({
    example: 4.99,
    description: 'Shipping cost for the order'
  })
  @IsNumber()
  @Min(0, { message: 'El costo de envío no puede ser negativo' })
  shippingCost: number;
}
