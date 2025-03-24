import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Role } from './enum/roles.enum';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserStatus } from 'src/user/enum/userStatus.enum';
import { UserClient } from 'src/user/enum/userClient.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly mailService: MailService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async signUp(CreateAuthDto: CreateAuthDto) {
    const {
      name,
      uid,
      email = 'default@example.com', // Valor predeterminado seguro
      password = 'Mundial@123', // Valor predeterminado seguro
      confirmPassword = 'Mundial@123', // Valor predeterminado seguro
      address,
      phone,
      country,
      city,
    } = CreateAuthDto;

    // Verificar si el correo electrónico ya existe
    const dbUser = await this.userService.findByEmail(email);
    if (dbUser) {
      throw new HttpException(
        { statusCode: HttpStatus.BAD_REQUEST, message: 'Email already exists' },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (password !== confirmPassword) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Passwords do not match',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    // Asegurarse de que la contraseña no sea undefined o vacía
    if (!password) {
      throw new HttpException(
        { statusCode: HttpStatus.BAD_REQUEST, message: 'Password is required' },
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) throw new Error('Error hashing password');

    const newUser = await this.userService.createUser({
      name,
      uid,
      email, // Valor predeterminado seguro
      address,
      phone,
      country,
      city,
      password: hashedPassword,
      role: Role.User, // Set default role to User
      status: UserStatus.ACTIVE, // Set default status to ACTIVE
      client: UserClient.STANDARD, // Set default client to STANDARD
    });

    return { ...newUser, password: undefined };
  }

  async signIn(loginAuthDto: LoginAuthDto): Promise<{ access_token: string }> {
    const { email, password = 'Mundial@123', uid } = loginAuthDto; // Valor predeterminado seguro

    const user = await this.userService.findOneById(uid);

    console.log('role ENCONTRADO:', user.role);
    if (!user) throw new BadRequestException('User not found');

    // Asegurarse de que la contraseña y el hash no sean undefined o vacíos
    if (!password || !user.password) {
      throw new BadRequestException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new BadRequestException('Invalid credentials');

    const payload = {
      userId: user.id,
      email: user.email,
      uid: user.uid,
      roles: user.role,
    };
    const access_token = await this.jwtService.signAsync(payload, {
      expiresIn: '2h',
    });

    console.log('TOKEN GENERADO:', access_token);

    // Enviar correo de notificación de inicio de sesión
    if (user.email) {
      await this.mailService.sendMail(
        user.email,
        'Inicio de sesión exitoso Luxora',
        `Hola ${user.name}, has iniciado sesión correctamente en nuestro eCommerce Luxora.`,
      );
    }

    // Actualiza lastLogin
    user.lastLogin = new Date();
    await this.userRepository.save(user);

    // Incrementar el contador de inicio de sesión
    user.loginCount += 1;
    await this.userRepository.save(user);

    return {
      access_token,
      ...user,
    };
  }
}
