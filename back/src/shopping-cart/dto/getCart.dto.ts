import { ApiProperty } from "@nestjs/swagger";
import { CartProductDto } from "./cartProduct.dto";

export class GetCartDto {
    @ApiProperty()
    id: string;
  
    @ApiProperty()
    userId: string;
  
    @ApiProperty({ type: () => [CartProductDto] })
    cartProducts: CartProductDto[];
  
    @ApiProperty()
    totalPrice: number;
  
    @ApiProperty()
    shippingCost: number;
  }