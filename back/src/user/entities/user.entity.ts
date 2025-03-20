import { Order } from "src/order/entities/order.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { UserClient } from "../enum/userClient.enum"
import { Role } from "src/auth/enum/roles.enum"
import { UserStatus } from "../enum/userStatus.enum"

@Entity({
    name: "users"
})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id?: string

    @Column({ type: "varchar", length: 255, nullable: true, unique: true })
    uid?: string

    @Column({ length: 50, nullable: true })
    name?: string

    @Column({ length: 50, nullable: false })
    email: string

    @Column({ length: 80, nullable: true })
    password?: string

    @Column({ length: 20, nullable: true })
    phone?: string

    @Column({ length: 50, nullable: true })
    country?: string

    @Column({ length: 50, nullable: true })
    city?: string

    @Column({ type: 'text', nullable: true })
    address?: string

    @Column({ type: "enum", enum: Role, nullable: true })
    role?: Role

    @Column({ type: "enum", enum: UserStatus, nullable: true })
    status?: UserStatus

    @Column({ type: 'enum', enum: UserClient, nullable: true })
    client?: UserClient

    @Column({ type: 'timestamp', nullable: true })
    createdAt?: Date

    @Column({ type: 'timestamp', nullable: true })
    lastLogin?: Date

    @Column({ type: 'int', nullable: true })
    loginCount?: number

    @OneToMany(() => Order, (order) => order.user, { nullable: true })
    orders?: Order[]
}
