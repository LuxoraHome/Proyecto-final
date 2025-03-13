import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Length, IsEnum } from 'class-validator';
import { UserClient } from 'src/user/enum/userClient.enum';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'User UID' })
  @IsOptional()
  @IsString()
  uid?: string;

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

  @ApiPropertyOptional({ example: 'United States', description: 'User country' })
  @IsOptional()
  @IsString()
  @Length(5, 20, { message: 'El país debe tener entre 5 y 20 caracteres.' })
  country?: string;

  @ApiPropertyOptional({ example: 'New York', description: 'User city' })
  @IsOptional()
  @IsString()
  @Length(5, 20, { message: 'La ciudad debe tener entre 5 y 20 caracteres.' })
  city?: string;

  @ApiPropertyOptional({ example: '123 Main St, Apt 4B', description: 'User address' })
  @IsOptional()
  @IsString()
  @Length(3, 80, { message: 'La dirección debe tener entre 3 y 80 caracteres.' })
  address?: string;

  @ApiPropertyOptional({ example: 'standard', description: 'User client type', enum: UserClient })
  @IsOptional()
  @IsEnum(UserClient, { message: 'Debe ser un tipo de cliente válido.' })
  client?: UserClient;
}
