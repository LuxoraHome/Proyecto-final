import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSeed } from './seeder/user.seed';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userSeed: UserSeed
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
<<<<<<< HEAD
    return await this.userService.create(createUserDto);
=======
    return await this.userService.createUser(createUserDto);
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }

  @Post("seeder")
  async seeder(){
    try {
      return await this.userSeed.createUserSeeder()
    } catch (error) {
      throw new BadRequestException("Error al cargar los usuarios precargados")
    }
  }
  @Get()
  async findAll() {
<<<<<<< HEAD
    return await this.userService.findAll();
=======
    return await this.userService.findAllUsers();
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
<<<<<<< HEAD
    return await this.userService.findOne(id);
=======
    return await this.userService.findOneById(id);
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
<<<<<<< HEAD
      await this.userService.update(id, updateUserDto);
=======
      await this.userService.updateUser(id, updateUserDto);
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
      return {message: "User updated successfully", id}
    } catch (error) {
      throw new BadRequestException ("Error updating user")
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
<<<<<<< HEAD
    return await this.userService.remove(id);
=======
    return await this.userService.removeUser(id);
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }
}
