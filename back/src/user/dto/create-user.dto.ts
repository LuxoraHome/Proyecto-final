import { ApiProperty } from "@nestjs/swagger";

import { 
    IsBoolean,
    IsDate,
    IsEmail, 
    IsEnum, 
    IsNotEmpty, 
    IsNumberString, 
    IsOptional, 
    IsString, 
    IsUUID, 
    Matches, 
    MaxLength, 
    MinLength 
} from "class-validator";
import { Role } from "src/auth/enum/roles.enum";
import { UserStatus } from "../enum/userStatus.enum";



export class CreateUserDto {
    @ApiProperty({ example: "John Doe", description: "Full name of the user" })
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'El uid es requerido.' })
    uid: string

    @IsEmail({}, { message: 'El correo electrónico debe ser válido.' })
    email: string

    @ApiProperty({
        example: "Str0ngP@ss!",
        description: "Password with at least one uppercase, one lowercase, one number, and one special character. Length: 8-15 characters"
    })
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/, {
        message: 'La contraseña debe tener entre 8 y 15 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*).'
    })
    password: string

    @ApiProperty({ example: "Str0ngP@ss!", description: "Password confirmation (optional)", required: false })
    @IsString()
    @MinLength(3, { message: 'La dirección debe tener al menos 3 caracteres.' })
    @MaxLength(80, { message: 'La dirección no puede superar los 80 caracteres.' })
    address: string

    @IsString({ message: 'El teléfono debe ser una cadena de texto' })
    phone: string

    @ApiProperty({ example: "United States", description: "User's country (optional)", required: false })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    country?: string;

    @ApiProperty({ example: "New York", description: "User's city (optional)", required: false })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    city?: string;


    @ApiProperty({ example: Role.User, description: "Indicates if the user is an admin", required: false })
    @IsEnum(Role)

    // Nuevo campo createdAt el cual registra la fecha de creación del usuario
    @IsDate()
    createdAt: Date

    // nuevo campo lastLogin el cual registra la fecha de último login del usuario
    @IsDate()
    lastLogin: Date;

    @ApiProperty({ example: false, description: "Indicates if the user is an admin", required: false })
    @IsBoolean()

    @IsOptional()
    role?: Role;

    @ApiProperty({ example: UserStatus.ACTIVE, description: "Indicates if the user is active", required: false })
    @IsEnum(UserStatus)
    @IsOptional()
    status?: UserStatus
}
