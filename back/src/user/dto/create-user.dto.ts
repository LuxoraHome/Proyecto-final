import { ApiProperty } from "@nestjs/swagger";
import {
    IsBoolean,
    IsDate,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    Matches,
    MaxLength,
    MinLength
} from "class-validator";
import { Role } from "src/auth/enum/roles.enum";
import { UserStatus } from "../enum/userStatus.enum";

export class CreateUserDto {
    @ApiProperty({ example: "John Doe", description: "Full name of the user", required: false })
    @IsString()
    //@MinLength(3)
    //@MaxLength(80)
    @IsOptional()
    name?: string = "";

    @IsString()
    //@IsOptional()
    uid: string;

    @IsEmail({}, { message: 'El correo electrónico debe ser válido.' })
    //@IsOptional()
    email: string = "";

    @ApiProperty({
        example: "Str0ngP@ss!",
        description: "Password with at least one uppercase, one lowercase, one number, and one special character. Length: 8-15 characters",
        required: false
    })
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/, {
        message: 'La contraseña debe tener entre 8 y 15 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*).'
    })
    @IsOptional()
    password?: string = "";

    @ApiProperty({ example: "Str0ngP@ss!", description: "Password confirmation (optional)", required: false })
    @IsString()
    //@MinLength(3, { message: 'La dirección debe tener al menos 3 caracteres.' })
    //@MaxLength(80, { message: 'La dirección no puede superar los 80 caracteres.' })
    @IsOptional()
    address?: string = "";

    @IsString({ message: 'El teléfono debe ser una cadena de texto' })
    @IsOptional()
    phone?: string = "";

    @ApiProperty({ example: "United States", description: "User's country (optional)", required: false })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    country?: string = "";

    @ApiProperty({ example: "New York", description: "User's city (optional)", required: false })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    city?: string = "";

    @ApiProperty({ example: Date.now(), description: "User creation date", required: false })
    @IsOptional()
    @IsDate()
    createdAt?: Date = new Date();

    @ApiProperty({ example: Date.now(), description: "User last login date", required: false })
    @IsOptional()
    @IsDate()
    lastLogin?: Date = new Date();

    @ApiProperty({ example: false, description: "Indicates if the user is an admin", required: false })
    @IsBoolean()
    @IsOptional()
    role?: Role = Role.User;

    @ApiProperty({ example: UserStatus.ACTIVE, description: "Indicates if the user is active", required: false })
    @IsEnum(UserStatus)
    @IsOptional()
    status?: UserStatus = UserStatus.ACTIVE;
}
