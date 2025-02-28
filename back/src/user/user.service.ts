import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto)
    return this.userRepository.save(newUser)
  }

  async findAllUsers() {
    return await this.userRepository.find()
  }

  async findOneById(id: string) {
    return await this.userRepository.findOne({where: {id}})
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto)
  }

  async removeUser(id: string) {
    await this.userRepository.delete(id)
    return {id}
  }
  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
  

}
