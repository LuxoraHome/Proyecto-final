import { IsUUID, IsOptional, IsNumber, IsEnum, IsString } from "class-validator";
import { OrderStatusEnum } from "../orderStatus-enum"

export class UpdateOrderDto {
  @IsOptional()
  @IsUUID()
  userId?: string; 

  @IsOptional()
  @IsNumber()
  total?: number; 

  @IsOptional()
  @IsString()
  shippingAddress?: string; 

  @IsOptional()
  @IsEnum(OrderStatusEnum)
  status?: OrderStatusEnum; 
}
