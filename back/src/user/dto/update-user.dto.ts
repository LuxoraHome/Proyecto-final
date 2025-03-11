import { IsEmail, IsOptional, IsString, Length, IsEnum } from 'class-validator';
import { UserClient } from 'src/user/enum/userClient.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  uid?: string;

  @IsOptional()
  @IsString()
  @Length(3, 80, { message: 'El nombre debe tener entre 3 y 80 caracteres.' })
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Debe ser un correo electrónico válido.' })
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  @Length(5, 20, { message: 'El país debe tener entre 5 y 20 caracteres.' })
  country?: string;

  @IsOptional()
  @IsString()
  @Length(5, 20, { message: 'La ciudad debe tener entre 5 y 20 caracteres.' })
  city?: string;

  @IsOptional()
  @IsString()
  @Length(3, 80, { message: 'La dirección debe tener entre 3 y 80 caracteres.' })
  address?: string;

  @IsOptional()
  @IsEnum(UserClient, { message: 'Debe ser un tipo de cliente válido.' })
  client?: UserClient;
}
