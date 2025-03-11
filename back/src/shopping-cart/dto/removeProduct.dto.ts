import { IsUUID } from "class-validator";

export class RemoveProductDto {
    @IsUUID()
    uid: string;
    
    @IsUUID()
    productId: string;
}

// export class RemoveCartDto {
//     @IsUUID()
//     userId: string;
    
//     @IsUUID()
//     productId: string;
// }