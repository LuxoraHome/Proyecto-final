import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNotEmpty } from 'class-validator';

export class RemoveProductDto {
  @ApiProperty({
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    description: 'User ID'
  })
  @IsUUID()
  @IsNotEmpty()
  uid: string;

  @ApiProperty({
    example: 'b1a2b3c4-d5e6-7890-1234-56789abcdef0',
    description: 'Product ID to be removed from the cart'
  })
  @IsUUID()
  @IsNotEmpty()
  productId: string;
}
