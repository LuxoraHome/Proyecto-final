import { ApiProperty, ApiPropertyOptional, ApiHideProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsDateString, IsString, IsUUID, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOfferDto {

    @ApiHideProperty() // 🔹 Oculta este campo en Swagger
    @IsOptional()
    @IsUUID()
    @IsString()
    productId: string;

    @ApiProperty({
        description: 'The name of the product',
        example: 'Product 1',
    })
    @IsString()
    productName: string;

    @ApiHideProperty() // 🔹 Oculta este campo en Swagger
    @IsOptional()
    @IsNumber()
    productPrice: number;

    @ApiHideProperty() // 🔹 Oculta este campo en Swagger
    @IsOptional()
    @IsNumber()
    productFinalPrice: number;

    @ApiProperty({
        description: 'The discount of the product',
        example: 10,
    })
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    productDiscount: number;

    @ApiProperty({
        description: 'The start date of the offer',
        example: '2023-01-01T00:00:00.000Z',
    })
    @IsDateString()
    startDate: Date;

    @ApiProperty({
        description: 'The end date of the offer',
        example: '2023-01-01T00:00:00.000Z',
    })
    @IsDateString()
    endDate: Date;
}
