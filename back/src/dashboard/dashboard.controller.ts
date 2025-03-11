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

  // 3. Top compradores
  @Get('stats/buyers')
  async getTopBuyers() {
    return this.dashboardService.getBuyersStats();
  }

  @Get('stats/frequent')
  async getTopFrequentUsers() {
    return this.dashboardService.getTopFrequentUsers();
  }

}