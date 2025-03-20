import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { UserClient } from 'src/user/enum/userClient.enum';
import { Role } from '../enum/roles.enum';
import { UserStatus } from 'src/user/enum/userStatus.enum';

export class CreateAuthDto {
  @ApiProperty({ description: 'Nombre del usuario', minLength: 3, maxLength: 80, example: 'Juan Pérez', required: false })
  @IsString()
  @IsOptional()
  //@Length(3, 80)
  name?: string = "";

  @ApiProperty({ description: 'UID único del usuario', example: '123e4567-e89b-12d3-a456-426614174000', required: false })
  @IsString()
  //@IsOptional()
  uid: string;

  @ApiProperty({ description: 'Correo electrónico del usuario', example: 'usuario@example.com', required: false })
  @IsEmail()
  //@IsOptional()
  email: string;

  @ApiProperty({ description: 'Contraseña', minLength: 8, maxLength: 15, example: 'Password123!', required: false })
  @IsString()
  //@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/, {
  //  message: 'password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
  //})
  @IsOptional()
  //@Length(8, 15)
  password?: string = "Mundial@123";

  @ApiProperty({ description: 'Confirmación de la contraseña', minLength: 8, maxLength: 15, example: 'Password123!', required: false })
  @IsOptional()
  //@Length(8, 15)
  confirmPassword?: string = "Mundial@123";

  @ApiProperty({ description: 'Dirección del usuario', minLength: 3, maxLength: 80, example: 'Calle 123, Ciudad, País', required: false })
  @IsString()
  @IsOptional()
  //@Length(3, 80)
  address?: string = "";

  @ApiProperty({ description: 'Número de teléfono del usuario', example: '+1234567890', required: false })
  @IsOptional()
  @IsString()
  phone?: string = "";

  @ApiProperty({ description: 'País de residencia', minLength: 5, maxLength: 20, example: 'México', required: false })
  @IsString()
  @IsOptional()
  //@Length(5, 20)
  country?: string = "";

  @ApiProperty({ description: 'Ciudad de residencia', minLength: 5, maxLength: 20, example: 'Ciudad de México', required: false })
  @IsString()
  @IsOptional()
  //@Length(5, 20)
  city?: string = "";

  @ApiProperty({ description: 'Tipo de cliente', enum: UserClient, example: UserClient.STANDARD, required: false })
  @IsEnum(UserClient)
  @IsOptional()
  client?: UserClient = UserClient.STANDARD;

  @ApiProperty({ description: 'Tipo de usuario', enum: Role, example: Role.User, required: false })
  @IsEnum(Role)
  @IsOptional()
  role?: Role = Role.User;

  @ApiProperty({ description: 'Tipo de status', enum: UserStatus, example: UserStatus.ACTIVE, required: false })
  @IsEnum(UserStatus)
  @IsOptional()
  status?: UserStatus = UserStatus.ACTIVE;
}