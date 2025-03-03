import { Order } from "src/order/entities/order.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import {v4 as uuid} from "uuid"


@Entity({
    name: "users"
})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string 
    
    @Column({length: 50, nullable: false})
    name: string

    @Column({length: 50, /* unique: true, */ nullable: false})
    email: string

    @Column({length: 80, nullable: false})
    password: string

    @Column({ length: 20, nullable: true })
    phone: string;

    @Column({length: 50, nullable: true})
    country: string

    @Column({length: 50, nullable: true})
    city: string

    @Column({type: 'text', nullable: true})
    address: string

    // Relación 1:N con Order
    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]
    
}
