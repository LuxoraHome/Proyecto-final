import { Controller, Get, Post, Body, Put, Param, Delete, Patch, UseGuards, } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UpdateUserDto } from '../user/dto/update-user.dto';
//import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from '../auth/roles.guards';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../auth/enum/roles.enum';

@Controller('dashboard')
// @UseGuards(AuthGuard, RolesGuard) // Protege todos los endpoints del controlador
@Roles(Role.Admin) // Solo los administradores pueden acceder a estos endpoints
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) { }

  // 1. Estadísticas de usuarios
  @Get('stats/users')
  async getUserStats() {
    return this.dashboardService.getUserStats();
  }

  // 2. Métricas de negocio
  @Get('stats/orders')
  async getOrderStats() {
    return this.dashboardService.getOrderStats();
  }

  // 3. Gestión de usuarios

  // Crear un nuevo usuario
  @Post('users')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.dashboardService.createUser(createUserDto);
  }

  // Modificar un usuario existente
  @Put('users/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.dashboardService.updateUser(id, updateUserDto);
  }

  // Obtener todos los usuarios
  @Get('users')
  async findAllUsers() {
    return this.dashboardService.findAllUsers();
  }

  // Obtener un usuario por ID
  @Get('users/:id')
  async findOneUser(@Param('id') id: string) {
    return this.dashboardService.findOneUser(id);
  }

  // Eliminar un usuario por ID
  @Delete('users/:id')
  async removeUser(@Param('id') id: string) {
    return this.dashboardService.removeUser(id);
  }

  // Pausar un usuario por ID
  //  @Patch('users/:id/pause')
  //  async pauseUser(@Param('id') id: string) {
  //    return this.dashboardService.pauseUser(id);
  //  }
}