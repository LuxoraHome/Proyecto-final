import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateOrderDetailDto {
  @IsUUID()
  @IsNotEmpty()
  orderId: string;

  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  unitPrice: number;

  @IsNumber()
  @IsNotEmpty()
  subtotal: number;

  // @IsString()
  // @IsNotEmpty()
  // image: string
}