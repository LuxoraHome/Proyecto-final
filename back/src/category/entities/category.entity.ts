import { ApiProperty } from "@nestjs/swagger";
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
}