import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateProductDto {
    @ApiProperty({
        example: "Gaming Mouse",
        description: "Name of the product",
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        example: "A high-quality gaming mouse with RGB lighting",
        description: "Detailed description of the product",
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({
        example: "Electronics",
        description: "Category or type of the product",
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty({
        example: 49.99,
        description: "Price of the product in USD",
        required: true,
    })
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty({
        example: "Logitech",
        description: "Brand or designer of the product",
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    designer: string;

    @ApiProperty({
        example: "https://example.com/image.jpg",
        description: "URL of the product image",
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    image: string;

    @ApiProperty({
        example: 100,
        description: "Available stock for the product",
        required: true,
    })
    @IsNotEmpty()
    @IsNumber()
    stock: number;

    @ApiProperty({
        example: "550e8400-e29b-41d4-a716-446655440000",
        description: "UUID of the category this product belongs to",
        required: true,
    })
    @IsNotEmpty()
    @IsUUID()
    categoryId: string;
}