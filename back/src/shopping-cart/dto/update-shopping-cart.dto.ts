import { PartialType } from '@nestjs/swagger';
import { AddToCartDto } from './addtocart.dto';

export class UpdateShoppingCartDto extends PartialType(AddToCartDto) {}
