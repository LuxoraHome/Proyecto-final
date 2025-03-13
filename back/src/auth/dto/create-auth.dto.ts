import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({
    description: 'Nombre del usuario',
    minLength: 3,
    maxLength: 80,
    example: 'Juan Pérez',
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 80)
  name: string;

  @ApiProperty({
    description: 'UID único del usuario',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  @IsNotEmpty()
  uid: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'usuario@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description:
      'Contraseña con al menos una letra mayúscula, una minúscula, un número y un carácter especial',
    minLength: 8,
    maxLength: 15,
    example: 'Password123!',
  })
  @IsString()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/,
    {
      message:
        'password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
    },
  )
  @Length(8, 15)
  password: string;

  @ApiProperty({
    description: 'Confirmación de la contraseña',
    minLength: 8,
    maxLength: 15,
    example: 'Password123!',
  })
  @IsNotEmpty()
  @Length(8, 15)
  confirmPassword: string;

  @ApiProperty({
    description: 'Dirección del usuario',
    minLength: 3,
    maxLength: 80,
    example: 'Calle 123, Ciudad, País',
  })
  @IsString()
  @Length(3, 80)
  address: string;

  @ApiProperty({
    description: 'Número de teléfono del usuario',
    example: '+1234567890',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'País de residencia',
    minLength: 5,
    maxLength: 20,
    example: 'México',
  })
  @IsString()
  @Length(5, 20)
  country: string;

  @ApiProperty({
    description: 'Ciudad de residencia',
    minLength: 5,
    maxLength: 20,
    example: 'Ciudad de México',
  })
  @IsString()
  @Length(5, 20)
  city: string;

  @IsBoolean()
  isAdmin: boolean;
}
