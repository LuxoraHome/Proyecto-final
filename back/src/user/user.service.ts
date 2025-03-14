import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { MailService } from 'src/mail/mail.service'; // se agrega el servicio de mail
import { Role } from 'src/auth/enum/roles.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly mailService: MailService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    const savedUser = await this.userRepository.save(newUser);

    // Enviar correo de bienvenida
    await this.mailService.sendMail(
      savedUser.email,
      'Bienvenido a Luxora',
      `Hola ${savedUser.name}, gracias por registrarte en nuestra pagina de Luxora.`,
    );

    // Registro de fecha de creación
    savedUser.createdAt = new Date();
    await this.userRepository.save(savedUser);

    return savedUser;
  }

  async findAllUsers() {
    return await this.userRepository.find();
  }

  async findOneById(uid: string) {
    return await this.userRepository.findOne({ where: { uid } });
  }

  async updateUser(adminId: string, userUid: string, updateUserDto: UpdateUserDto): Promise<User> {
    // Buscar al admin en la base de datos
    const admin = await this.userRepository.findOne({ where: { uid: adminId } });
  
    // Validar si el usuario autenticado es SuperAdmin
    if (!admin || admin.role !== Role.Superadmin) {
      throw new ForbiddenException('No tienes permisos para actualizar este usuario.');
    }
  
    // Evitar que el SuperAdmin se modifique a sí mismo
    if (adminId === userUid) {
      throw new ForbiddenException('No puedes modificar tu propia cuenta.');
    }
  
    // Buscar al usuario que se quiere actualizar
    const user = await this.userRepository.findOne({ where: { uid: userUid } });
    if (!user) {
      throw new NotFoundException(`Usuario con UID ${userUid} no encontrado.`);
    }
  
    // Evitar modificar el rol de otro SuperAdmin
    if (user.role === Role.Superadmin && updateUserDto.role && updateUserDto.role !== Role.Superadmin) {
      throw new ForbiddenException('No puedes modificar el rol de un SuperAdmin.');
    }
  
    // Evitar que un SuperAdmin asigne otro SuperAdmin (si no es deseado)
    if (updateUserDto.role === Role.Superadmin) {
      throw new ForbiddenException('No puedes asignar el rol de SuperAdmin.');
    }
  
    // Actualizar solo los campos permitidos
    Object.assign(user, updateUserDto);
  
    return this.userRepository.save(user);
  }
  

  async removeUser(id: string) {
    const userToDelete = await this.userRepository.findOne({ where: { id } });

    if (!userToDelete) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    await this.userRepository.delete(id);

    return {
      message: 'Usuario eliminado correctamente',
      id,
    };
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
