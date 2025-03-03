<<<<<<< HEAD
export class CreateOrderDto {}
=======
import { ApiProperty } from "@nestjs/swagger";
import { OrderDetail } from "src/order_details/entities/order_detail.entity";

export class CreateOrderDto {

    @ApiProperty()
    userId: string;

    @ApiProperty({ type: () => [OrderDetail] })
    orderDetails: { productId: string; quantity: number }[];
}
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
