
import { IsString, IsUUID, IsNumber, Min } from 'class-validator';

export class CartProductDto {
@IsUUID()
cartId: string;

@IsUUID()
productId: string;

@IsNumber()
@Min(1, { message: 'La cantidad debe ser al menos 1' })
quantity: number;

}


