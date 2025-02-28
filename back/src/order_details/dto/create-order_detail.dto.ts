import { Order } from "src/order/entities/order.entity";

export class CreateOrderDetailDto {
    orderId: string
    productId: string;
    quantity: number;
    unitPrice: number;
    subtotal: number;
}

