import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { Order } from '../order/entities/order.entity'; // Asegúrate de importar la entidad Order si es necesaria
import { Role } from '../auth/enum/roles.enum';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>, // Inyecta el repositorio de Order si es necesario
  ) { }

  // 1. Estadísticas de usuarios

  async getUserStats() {
    try {
      const totalUsers = await this.userRepository.count();
      const activeUsers = await this.userRepository
        .createQueryBuilder('user')
        .where('user.lastLogin >= :date', {
          date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        })
        .getCount();
      const newUsers = await this.userRepository
        .createQueryBuilder('user')
        .where('user.createdAt >= :date', {
          date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        })
        .getCount();
      return { totalUsers, activeUsers, newUsers };
    } catch (error) {
      throw new HttpException(
        'Error al obtener estadísticas de usuarios',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // 2. Métricas de negocio
  async getOrderStats() {
    // Total de ventas o pedidos realizados
    const totalOrders = await this.orderRepository.count();

    // Productos más vendidos (ejemplo básico, ajusta según tu entidad Order)
    const topProducts = await this.orderRepository
      .createQueryBuilder('order')
      .select('order.productId', 'productId')
      .addSelect('COUNT(order.productId)', 'totalSold')
      .groupBy('order.productId')
      .orderBy('totalSold', 'DESC')
      .limit(5) // Top 5 productos más vendidos
      .getRawMany();

    return { totalOrders, topProducts };
  }

  // 3. Gestión de usuarios

  // Crear un nuevo usuario
  async createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  // Modificar un usuario existente
  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    Object.assign(user, updateUserDto); // Actualiza los campos del usuario
    return await this.userRepository.save(user);
  }

  // Obtener todos los usuarios
  async findAllUsers() {
    return await this.userRepository.find();
  }

  // Obtener un usuario por ID
  async findOneUser(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return user;
  }

  // Eliminar un usuario por ID
  async removeUser(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    await this.userRepository.delete(id);
    return { message: `Usuario con ID ${id} eliminado correctamente` };
  }

  // Pausar un usuario por ID
  //  async pauseUser(id: string) {
  //    const user = await this.userRepository.findOne({ where: { id } });
  //    if (!user) {
  //      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
  //    }
  //    user.isActive = false; // Suponiendo que tienes un campo `isActive` en la entidad User
  //    return await this.userRepository.save(user);
  //  }
}