import { IsUUID } from "class-validator";

export class RemoveCartDto {
    @IsUUID()
    userId: string;
    
    @IsUUID()
    productId: string;
}