import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    uid: string;

    @IsEmail()
    email: string;

    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/)
    password: string;

    @IsString()
    @IsOptional() // <-- Hacerlo opcional para que no sea obligatorio en la creación
    confirmPassword?: string;

    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string;

    @IsNumber()
    phone: string;

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

    @IsOptional() // <-- Hacerlo opcional
    isAdmin?: boolean;
}
