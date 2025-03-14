import { Order } from "src/order/entities/order.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { UserClient } from "../enum/userClient.enum"


@Entity({
    name: "users"
})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 255, nullable: true, unique: true })
    uid: string

    @Column({ length: 50, nullable: false })
    name: string

    @Column({ length: 50, /* unique: true, */ nullable: false })
    email: string

    @Column({ length: 80, nullable: false })
    password: string

    @Column({ length: 20, nullable: true })
    phone: string;

    @Column({ length: 50, nullable: true })
    country: string

    @Column({ length: 50, nullable: true })
    city: string

    @Column({ type: 'text', nullable: true })
    address: string

    @Column({ default: false })
    isAdmin: boolean;

    @Column({ type: 'enum', enum: UserClient, default: UserClient.STANDARD })
    client: UserClient;

    // Nuevo campo createdAt registra la fecha de creacion de usuario
    @Column({ type: 'timestamp', nullable: true })
    createdAt: Date

    // Nuevo campo lastLogin registra la fecha de último login del usuario
    @Column({ type: 'timestamp', nullable: true })
    lastLogin: Date;

    // Nuevo campo loginCount registra la cantidad de logins del usuario
    @Column({ type: 'int', default: 0 })
    loginCount: number;

    // Relación 1:N con Order
    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]
}