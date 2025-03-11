import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator"
// import { UserClient } from "../enum/userClient.enum"

export class CreateUserDto {
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

    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/, {
        message: 'La contraseña debe tener entre 8 y 15 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*).'
    })
    password: string

    @IsString()
    @MinLength(3, { message: 'La dirección debe tener al menos 3 caracteres.' })
    @MaxLength(80, { message: 'La dirección no puede superar los 80 caracteres.' })
    address: string

    @IsString({ message: 'El teléfono debe ser una cadena de texto' })
    phone: string

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    country?: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    city?: string;

    // Nuevo campo createdAt el cual registra la fecha de creación del usuario
    @IsDate()
    createdAt: Date

    // nuevo campo lastLogin el cual registra la fecha de último login del usuario
    @IsDate()
    lastLogin: Date;

    // @IsEnum(UserClient)
    // @IsOptional()
    // client?: UserClient;
}
