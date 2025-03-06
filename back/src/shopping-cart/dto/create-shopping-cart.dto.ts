import { ApiProperty } from "@nestjs/swagger";


export class CreateShoppingCartDto {
    userId: string;
    cartProducts: {
      productId: string;
      quantity: number;
      price: number;
    }[];
    totalPrice: number;
    shippingCost: number;
  }
  


  

  
