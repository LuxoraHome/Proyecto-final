import { ApiHideProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";


export class CreateCategoryDto {

    @ApiHideProperty()
    @IsOptional()
    id: string;
    name: string;
}
