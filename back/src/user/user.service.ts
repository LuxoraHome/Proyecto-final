import {
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

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const userToUpdate = await this.userRepository.findOne({ where: { id } });

    if (!userToUpdate) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    // Actualizar solo los campos que están presentes en updateUserDto
    Object.assign(userToUpdate, updateUserDto);

    await this.userRepository.save(userToUpdate);

    return userToUpdate;
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
