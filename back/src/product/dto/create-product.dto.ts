import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateProductDto {

    @ApiProperty({
        type: String,
        description: 'The id of the product. This id is unique and is generated automatically',
        required: true
    })
    id: string

    @ApiProperty({
        type: String,
        description: 'The name of the product. This name is required and is generated for the user',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    name: string


    @ApiProperty({
        type: String,
        description: 'The description of the product. This description is required and is generated for the user',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    description: string


    @ApiProperty({
        type: String,
        description: 'The type of the product. This type is required and is generated for the user',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    type: string


    @ApiProperty({
        type: Number,
        description: 'The price of the product. This price is required and is generated for the user',
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    price: number


    @ApiProperty({
        type: String,
        description: 'The designer of the product. This designer is required and is generated for the user',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    designer: string


    @ApiProperty({
        type: String,
        description: 'The image of the product. This image is required and is generated for the user',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    image: string

    @ApiProperty({
        type: Number,
        description: 'The stock of the product. This stock is required and is generated for the user',
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    stock: number

}
