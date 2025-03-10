import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdateProductDto extends OmitType(PartialType(CreateProductDto), ['id'] as const) {
  @ApiPropertyOptional({
    description: 'The category ID associated with the product'
  })
  @IsOptional()
  @IsUUID()
  categoryId?: string;
}

