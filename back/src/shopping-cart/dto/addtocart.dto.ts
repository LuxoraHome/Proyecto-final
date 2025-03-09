import { IsUUID, IsNumber, Min, IsString } from 'class-validator';

export class AddToCartDto {
  @IsString()
  uid: string;

  @IsUUID()
  productId: string;

  @IsNumber()
  @Min(1, { message: 'La cantidad debe ser al menos 1' })
  quantity: number;
}
// export class AddToCartDto {
//   @IsUUID()
//   userId: string;

//   @IsUUID()
//   productId: string;

//   @IsNumber()
//   @Min(1, { message: 'La cantidad debe ser al menos 1' })
//   quantity: number;
// }
