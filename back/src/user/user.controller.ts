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
    return await this.userService.createUser(createUserDto);
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
    return await this.userService.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOneById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      await this.userService.updateUser(id, updateUserDto);
      return {message: "User updated successfully", id}
    } catch (error) {
      throw new BadRequestException ("Error updating user")
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.removeUser(id);
  }
}
