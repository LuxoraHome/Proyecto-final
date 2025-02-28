import { ApiProperty } from "@nestjs/swagger";
<<<<<<< HEAD
import { Column, Entity, Generated, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class Category {

    @ApiProperty({
        type: String,
        description: 'The id of the category. This is a unique identifier for the category and is generated automatically',
        required: true
    })
    @PrimaryColumn({
        type: 'uuid',
        unique: true,
        nullable: false
    })
    @Generated('uuid')
    id: string = uuid();

    @ApiProperty({
        type: String,
        description: 'The name of the category. This is a required field, this is unique and is generated for the user',
        required: true
    })
    @Column({
        nullable: false
    })
    name: string;
=======
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, Generated, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({
    name: "categories"
})
export class Category {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, nullable: false })
    name: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
}