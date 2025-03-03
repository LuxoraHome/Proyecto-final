<<<<<<< HEAD
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
=======


export class CreateCategoryDto {
    id: string;
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
    name: string;
}
