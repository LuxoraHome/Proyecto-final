import { IsEnum } from "class-validator";
import { OrderStatusEnum } from "../orderStatus-enum";


export class UpdateOrderStatusDto {
    @IsEnum(OrderStatusEnum)
    status: OrderStatusEnum;
  }