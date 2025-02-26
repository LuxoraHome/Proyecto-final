import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {

    @ApiProperty({
        type: String,
        description: 'The id of the category. This is a unique identifier and is generated automatically',
        required: true
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'The name of the category. This is a string, this is required and is generated for the user',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    name: string;
}
