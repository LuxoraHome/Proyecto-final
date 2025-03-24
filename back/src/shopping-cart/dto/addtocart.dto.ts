import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, Min, IsString, IsNotEmpty } from 'class-validator';

export class AddToCartDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000', description: 'User ID' })
  @IsUUID()
  @IsNotEmpty()
  uid: string;

  @ApiProperty({ example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', description: 'Product ID' })
  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({ example: 2, description: 'Quantity of the product to add to cart' })
  @IsNumber()
  @Min(1, { message: 'La cantidad debe ser al menos 1' })
  quantity: number;
}
