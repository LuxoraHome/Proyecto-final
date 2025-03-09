import { IsString, IsEmail, IsNotEmpty, MinLength, IsOptional, IsEnum } from 'class-validator';
import { UserClient } from 'src/user/enum/userClient.enum'; // Importa el enum UserClient si es necesario
import { Role } from 'src/auth/enum/roles.enum'; // Importa el enum Role si es necesario

export class CreateDashboardDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @IsOptional()
    city?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsEnum(Role)
    @IsOptional()
    role?: Role; // Rol del usuario (por defecto, podría ser 'User')

    @IsEnum(UserClient)
    @IsOptional()
    client?: UserClient; // Tipo de cliente (por defecto, podría ser 'STANDARD')
}