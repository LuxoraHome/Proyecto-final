import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserClient } from 'src/user/enum/userClient.enum';
import { Role } from '../enum/roles.enum';
import { UserStatus } from 'src/user/enum/userStatus.enum';

export class CreateAuthDto {
  @ApiProperty({ description: 'Nombre del usuario', example: 'Juan Pérez', required: false })
  @IsString()
  @IsOptional()
  name?: string = "";

  @ApiProperty({ description: 'UID único del usuario', example: '123e4567-e89b-12d3-a456-426614174000', required: true })
  @IsString()
  @IsNotEmpty()
  uid: string;

  @ApiProperty({ description: 'Correo electrónico del usuario', example: 'usuario@example.com', required: false })
  @IsEmail()
  @IsOptional()
  email?: string = "default@example.com";

  @ApiProperty({ description: 'Contraseña', example: 'Password123!', required: false })
  @IsString()
  @IsOptional()
  password?: string = "Mundial@123"; // Valor predeterminado seguro

  @ApiProperty({ description: 'Confirmación de la contraseña', example: 'Password123!', required: false })
  @IsOptional()
  confirmPassword?: string = "Mundial@123"; // Valor predeterminado seguro

  @ApiProperty({ description: 'Dirección del usuario', example: 'Calle 123, Ciudad, País', required: false })
  @IsString()
  @IsOptional()
  address?: string = "";

  @ApiProperty({ description: 'Número de teléfono del usuario', example: '+1234567890', required: false })
  @IsOptional()
  @IsString()
  phone?: string = "";

  @ApiProperty({ description: 'País de residencia', example: 'México', required: false })
  @IsString()
  @IsOptional()
  country?: string = "";

  @ApiProperty({ description: 'Ciudad de residencia', example: 'Ciudad de México', required: false })
  @IsString()
  @IsOptional()
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

  @ApiProperty({ description: 'Fecha de creación', example: '2023-10-01T00:00:00.000Z', required: false })
  @IsOptional()
  createdAt?: Date = new Date();
}