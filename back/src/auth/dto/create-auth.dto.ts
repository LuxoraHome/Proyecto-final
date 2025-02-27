import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    Length,
    Matches,
  } from 'class-validator';
  
  export class CreateAuthDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 80)
    name: string;
  
    @IsEmail()
    email: string;
  
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
  
    @IsNotEmpty()
    @Length(8, 15)
    confirmPassword: string;
  
    @IsString()
    @Length(3, 80)
    address: string;
  
    @IsNotEmpty()
    @IsNumber()
    phone: number;
  
    @IsString()
    @Length(5, 20)
    country: string;
  
    @IsString()
    @Length(5, 20)
    city: string;
  }