import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity()
export class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    type: string

    @Column("decimal")
    price: number

    @Column()
    designer: string

    @Column()
    image: string

    @Column("int")
    stock: number

}
