import { ApiProperty } from "@nestjs/swagger";
import { OrderDetail } from "src/order_details/entities/order_detail.entity";

export class CreateOrderDto {

    @ApiProperty()
    uid: string;

    @ApiProperty({ type: () => [OrderDetail] })
    orderDetails: { productId: string; quantity: number }[];
}
// export class CreateOrderDto {

//     @ApiProperty()
//     userId: string;

//     @ApiProperty({ type: () => [OrderDetail] })
//     orderDetails: { productId: string; quantity: number }[];
// }
