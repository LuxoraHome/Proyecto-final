<<<<<<< HEAD
export class CreateOrderDetailDto {}
=======
import { Order } from "src/order/entities/order.entity";

export class CreateOrderDetailDto {
    orderId: string
    productId: string;
    quantity: number;
    unitPrice: number;
    subtotal: number;
}

>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
