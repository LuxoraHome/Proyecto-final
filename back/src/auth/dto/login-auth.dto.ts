import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'usuario@example.com',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    description: 'Contraseña del usuario (mínimo 8 caracteres)',
    minLength: 8,
    example: 'Password123!',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password?: string = "Mundial@123"; // Valor predeterminado seguro

  @ApiProperty({
    description: 'UID único del usuario (opcional)',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  uid: string;
}