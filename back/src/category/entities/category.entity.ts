import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, Generated, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({
    name: "categories"
})
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, default: "" })
    name?: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];

    // Nuevo campo: tipo de categoría
    @Column({ nullable: false, default: "" })
    type?: string;

    // Nuevo campo: color asociado
    @Column({ nullable: false, default: "" })
    color?: string;
}