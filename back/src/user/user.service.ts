import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { MailService } from 'src/mail/mail.service'; // se agrega el servicio de mail

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly mailService: MailService,
  ) { }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    const savedUser = await this.userRepository.save(newUser);

    // Enviar correo de bienvenida
    await this.mailService.sendMail(
      savedUser.email,
      'Bienvenido a Luxora',
      `Hola ${savedUser.name}, gracias por registrarte en nuestra pagina de Luxora.`,
    );

    return savedUser;
  }

  async findAllUsers() {
    return await this.userRepository.find()
  }

  async findOneById(uid: string) {
    return await this.userRepository.findOne({ where: { uid } })
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto)
  }

  async removeUser(id: string) {
    await this.userRepository.delete(id)
    return { id }
  }
  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

}
