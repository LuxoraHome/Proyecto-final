import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Role } from './enum/roles.enum';
import { MailService } from 'src/mail/mail.service'; // se agrega el servicio de mail
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly mailService: MailService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async signUp(CreateAuthDto: CreateAuthDto) {
    const {
      name,
      uid,
      email,
      password,
      confirmPassword,
      address,
      phone,
      country,
      city,
    } = CreateAuthDto;
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
      createdAt: new Date(),
      lastLogin: new Date(),
    });

    return { ...newUser, password: undefined };
  }

  async signIn(loginAuthDto: LoginAuthDto): Promise<{ access_token: string }> {
    const { email, password } = loginAuthDto;


    const user = await this.userService.findByEmail(email);

    console.log('role ENCONTRADO:', user.role);
    if (!user) throw new BadRequestException('User not found');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new BadRequestException('Invalid credentials');

    const payload = {
      userId: user.id,
      email: user.email,
      uid: user.uid,
      roles: user.role
    };
    const access_token = await this.jwtService.signAsync(payload, {
      expiresIn: '2h',
    });

    console.log('TOKEN GENERADO:', access_token);

    // Enviar correo de notificación de inicio de sesión
    await this.mailService.sendMail(
      user.email,
      'Inicio de sesión exitoso Luxora',
      `Hola ${user.name}, has iniciado sesión correctamente en nuestro eCommerce Luxora.`,
    );
    // Actualiza lastLogin
    user.lastLogin = new Date();
    await this.userRepository.save(user);

    // Incrementar el contador de inicio de sesión
    user.loginCount += 1;
    await this.userRepository.save(user);

    return {
      access_token,

      ...user
    };

  }
}