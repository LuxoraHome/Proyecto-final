import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsUUID, IsOptional, IsNumber, IsEnum, IsString } from "class-validator";
import { OrderStatusEnum } from "../orderStatus-enum";

export class UpdateOrderDto {
  @ApiPropertyOptional({
    description: "ID único del usuario que realizó el pedido",
    example: "987e6543-e21b-34d6-a789-123456789abc",
  })
  @IsOptional()
  @IsUUID()
  userId?: string; 

  @ApiPropertyOptional({
    description: "Total del pedido en la moneda establecida",
    example: 150.75,
  })
  @IsOptional()
  @IsNumber()
  total?: number; 

  @ApiPropertyOptional({
    description: "Dirección de envío del pedido",
    example: "Av. Siempre Viva 742, Springfield",
  })
  @IsOptional()
  @IsString()
  shippingAddress?: string; 

  @ApiPropertyOptional({
    description: "Estado actual del pedido",
    enum: OrderStatusEnum,
    example: OrderStatusEnum.PENDING,
  })
  @IsOptional()
  @IsEnum(OrderStatusEnum)
  status?: OrderStatusEnum; 
}
