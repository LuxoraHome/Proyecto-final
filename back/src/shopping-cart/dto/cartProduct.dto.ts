import { ApiProperty } from "@nestjs/swagger";

export class CartProductDto {
    @ApiProperty()
    id: string;
  
    @ApiProperty()
    productId: string;
  
    @ApiProperty()
    quantity: number;
  
    @ApiProperty()
    price: number;
  }