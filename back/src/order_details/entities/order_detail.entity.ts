import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"


@Entity({
    name: "orderdetails"
})
export class OrderDetail {

    @PrimaryGeneratedColumn('uuid')
    id: string

    //Relación N:1 con order
    @ManyToOne(() => Order, (order) => order.orderDetails)
    @JoinColumn({ name: "order_id" })
    order: Order;

    //Relación N:1 con products
    @ManyToOne(() => Product, (product) => product.orderDetails)
    @JoinColumn({ name: "product_id" })
    product: Product

    @Column({ type: 'int', nullable: false })
    quantity: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    unitPrice: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    subtotal: number;

    // @Column({ type: 'varchar', length: 255, nullable: true})
    // image: string
}