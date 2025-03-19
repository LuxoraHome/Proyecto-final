import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsDateString, IsString, IsUUID, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOfferDto {

    @ApiProperty({
        description: 'The id of the product',
        example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        required: true
    })
    @IsOptional()
    @IsUUID()
    @IsString()
    productId: string;

    @ApiPropertyOptional({
        description: 'The name of the product',
        example: 'Product 1',
    })
    @IsString()
    productName: string;

    @ApiPropertyOptional({
        description: 'The price of the product',
        example: 49.99,
    })
    @IsOptional()
    @IsNumber()
    productPrice: number;

    @ApiPropertyOptional({
        description: 'The final price of the product',
        example: 39.99,
    })
    @IsOptional()
    @IsNumber()
    productFinalPrice: number;

    @ApiProperty({
        description: 'The discount of the product',
        example: 10,
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    productDiscount: number;

    @ApiProperty({
        description: 'The start date of the offer',
        example: '2023-01-01T00:00:00.000Z',
        required: true
    })
    @IsDateString()
    startDate: Date;

    @ApiProperty({
        description: 'The end date of the offer',
        example: '2023-01-01T00:00:00.000Z',
        required: true
    })
    @IsDateString()
    endDate: Date;
}