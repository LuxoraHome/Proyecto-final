import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Role } from './enum/roles.enum';
import { MailService } from 'src/mail/mail.service'; // se agrega el servicio de mail
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) { }

  async signUp(CreateAuthDto: CreateAuthDto) {
    const { name, uid, email, password, confirmPassword, address, phone, country, city } = CreateAuthDto;
    
    const dbUser = await this.userService.findByEmail(email);
    if (dbUser) {
      throw new HttpException(
        { statusCode: HttpStatus.BAD_REQUEST, message: 'Email already exists' },
        HttpStatus.BAD_REQUEST
      );
    }
  
    if (password !== confirmPassword) {
      throw new HttpException(
        { statusCode: HttpStatus.BAD_REQUEST, message: 'Passwords do not match' },
        HttpStatus.BAD_REQUEST
      );
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) throw new Error('Error hashing password');
  
    const newUser = await this.userService.createUser({
      name,
      uid,
      email,
      address,
      phone,
      country,
      city,
      password: hashedPassword,
    });
  
    return { ...newUser, password: undefined }; 
  }
  
  async signIn(loginAuthDto: LoginAuthDto): Promise<{ access_token: string; user: Partial<User> }> {
    const { email, password } = loginAuthDto;
  
    const user = await this.userService.findByEmail(email);
    if (!user) throw new BadRequestException('User not found');
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new BadRequestException('Invalid credentials');
  
    const payload = {
      userId: user.id,
      email: user.email,
      uid: user.uid,
      roles: [user.isAdmin ? Role.Admin : Role.User],
    };
  
    const access_token = await this.jwtService.signAsync(payload, {
      expiresIn: '2h',
    });
  
    await this.mailService.sendMail(
      user.email,
      'Inicio de sesión exitoso Luxora',
      `Hola ${user.name}, has iniciado sesión correctamente en nuestro eCommerce Luxora.`,
    );
  
    return {
      access_token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        uid: user.uid,
        isAdmin: user.isAdmin,
        address: user.address,
        phone: user.phone,
        country: user.country,
        city: user.city,
      }, 
    };
  }
  
}