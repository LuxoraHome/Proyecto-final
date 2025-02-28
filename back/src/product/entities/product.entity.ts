import { ApiProperty } from "@nestjs/swagger"
<<<<<<< HEAD
import { OrderDetail } from "src/order_details/entities/order_detail.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
=======
import { Category } from "src/category/entities/category.entity";
import { OrderDetail } from "src/order_details/entities/order_detail.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
import { v4 as uuid } from 'uuid'



<<<<<<< HEAD
@Entity({ name: 'products' })
=======
@Entity({ 
    name: 'products' 
})
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 100, nullable: false })
    name: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    type: string;

    @Column({ type: 'double precision', nullable: false })
    price: number;

    @Column({ nullable: false })
    designer: string;

    @Column({ nullable: false })
    image: string;

    @Column({ type: 'int', nullable: false })
    stock: number;

    @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.product)
    orderDetails: OrderDetail[];
<<<<<<< HEAD
=======

    @ManyToOne(() => Category, (category) => category.products, { nullable: true, eager: true })
    category: Category
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
}

