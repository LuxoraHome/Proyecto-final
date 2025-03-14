import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Length, IsEnum } from 'class-validator';
import { UserClient } from 'src/user/enum/userClient.enum';
import { UserStatus } from '../enum/userStatus.enum';
import { Role } from 'src/auth/enum/roles.enum';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'John Doe', description: 'User full name' })
  @IsOptional()
  @IsString()
  @Length(3, 80, { message: 'El nombre debe tener entre 3 y 80 caracteres.' })
  name?: string;

  @ApiPropertyOptional({ example: 'johndoe@example.com', description: 'User email' })
  @IsOptional()
  @IsEmail({}, { message: 'Debe ser un correo electrónico válido.' })
  email?: string;

  @ApiPropertyOptional({ example: '+1234567890', description: 'User phone number' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ example: 'standard', description: 'User client type', enum: UserClient })
  @IsOptional()
  @IsEnum(UserClient, { message: 'Debe ser un tipo de cliente válido.' })
  client?: UserClient;
  
  @ApiPropertyOptional({ example: 'active', description: 'User status', enum: UserStatus })
  @IsOptional()
  @IsEnum(UserStatus, { message: 'Debe ser un tipo de status válido.' })
  status?: UserStatus;

  @ApiPropertyOptional({ example: 'user', description: 'User role', enum: Role })
  @IsOptional()
  @IsEnum(Role, { message: 'Debe ser un tipo de role válido.' })
  role?: Role;
}
