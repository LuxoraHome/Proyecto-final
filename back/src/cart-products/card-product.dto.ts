import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, Min, IsNotEmpty } from 'class-validator';

export class CartProductDto {
  @ApiProperty({ example: 'b1a2b3c4-d5e6-7890-1234-56789abcdef0', description: 'Cart ID' })
  @IsUUID()
  @IsNotEmpty()
  cartId: string;

  @ApiProperty({ example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', description: 'Product ID' })
  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({ example: 2, description: 'Quantity of the product in the cart' })
  @IsNumber()
  @Min(1, { message: 'La cantidad debe ser al menos 1' })
  quantity: number;

  @ApiProperty({ example: 49.99, description: 'Price of the product at the moment of adding to cart' })
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0, { message: 'El precio no puede ser negativo' })
  price: number;
}
