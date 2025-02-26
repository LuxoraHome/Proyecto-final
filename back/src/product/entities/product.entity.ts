import { ApiProperty } from "@nestjs/swagger"
import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity()
export class Product {

    @ApiProperty({
        type: String,
        description: 'The id of the product',
        required: true
    })
    @PrimaryColumn({
        type: 'uuid',
        unique: true,
        nullable: false
    })
    @Generated('uuid')
    id: string = uuid()

    @ApiProperty({
        type: String,
        description: 'The name of the product',
        maxLength: 100,
        required: true
    })
    @Column({
        length: 100,
        nullable: false
    })
    name: string

    @ApiProperty({
        type: String,
        description: 'The description of the product',
        required: true
    })
    @Column({
        nullable: false
    })
    description: string

    @ApiProperty({
        type: String,
        description: 'The type of the product',
        required: true
    })
    @Column({
        nullable: false
    })
    type: string

    @ApiProperty({
        type: Number,
        description: 'The price of the product',
        required: true
    })
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false
    })
    price: number

    @ApiProperty({
        type: String,
        description: 'The designer of the product',
        required: true
    })
    @Column({
        nullable: false
    })
    designer: string

    @ApiProperty({
        type: String,
        description: 'The image of the product',
        required: true
    })
    @Column({
        nullable: false
    })
    image: string

    @ApiProperty({
        type: Number,
        description: 'The stock of the product',
        required: true
    })
    @Column({
        type: 'int',
        nullable: false
    })
    stock: number

}
