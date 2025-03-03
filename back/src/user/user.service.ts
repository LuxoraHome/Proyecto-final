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

<<<<<<< HEAD
  async create(createUserDto: CreateUserDto) {
=======
  async createUser(createUserDto: CreateUserDto) {
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
    const newUser = await this.userRepository.create(createUserDto)
    return this.userRepository.save(newUser)
  }

<<<<<<< HEAD
  async findAll() {
    return await this.userRepository.find()
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({where: {id}})
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto)
  }

  async remove(id: string) {
    return await this.userRepository.delete(id)
=======
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
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }
  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
  

}
