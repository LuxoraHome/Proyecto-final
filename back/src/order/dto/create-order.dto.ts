import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class OrderDetailDto {
  @ApiProperty({
    description: 'ID único del producto',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({
    description: 'Cantidad del producto a comprar',
    example: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}

export class CreateOrderDto {
  @ApiProperty({
    description: 'UID del usuario que realiza el pedido',
    example: '987e6543-e21b-34d6-a789-123456789abc',
  })
  @IsString()
  @IsNotEmpty()
  uid: string;

  @ApiProperty({
    description: 'Lista de productos con sus cantidades',
    type: [OrderDetailDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderDetailDto)
  orderDetails: OrderDetailDto[];
}
