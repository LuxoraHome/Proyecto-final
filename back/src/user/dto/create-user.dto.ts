import { ApiProperty } from "@nestjs/swagger";
import { 
    IsBoolean,
    IsEmail, 
    IsNotEmpty, 
    IsNumberString, 
    IsOptional, 
    IsString, 
    IsUUID, 
    Matches, 
    MaxLength, 
    MinLength 
} from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "John Doe", description: "Full name of the user" })
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: "550e8400-e29b-41d4-a716-446655440000", description: "Unique user identifier (UUID)" })
    @IsUUID()
    @IsNotEmpty()
    uid: string;

    @ApiProperty({ example: "user@example.com", description: "User's email address" })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ 
        example: "Str0ngP@ss!", 
        description: "Password with at least one uppercase, one lowercase, one number, and one special character. Length: 8-15 characters"
    })
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/, { message: "Password is too weak" })
    @IsNotEmpty()
    password: string;

    @ApiProperty({ example: "Str0ngP@ss!", description: "Password confirmation (optional)", required: false })
    @IsString()
    @IsOptional()
    confirmPassword?: string;

    @ApiProperty({ example: "123 Main Street", description: "User's address" })
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    @IsNotEmpty()
    address: string;

    @ApiProperty({ example: "+123456789", description: "User's phone number" })
    @IsString()
    @IsNumberString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({ example: "United States", description: "User's country (optional)", required: false })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    country?: string;

    @ApiProperty({ example: "New York", description: "User's city (optional)", required: false })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    city?: string;

    @ApiProperty({ example: false, description: "Indicates if the user is an admin", required: false })
    @IsBoolean()
    @IsOptional()
    isAdmin?: boolean;
}
