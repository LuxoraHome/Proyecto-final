import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { Order } from '../order/entities/order.entity'; // Asegúrate de importar la entidad Order si es necesaria
import { OrderDetail } from '../order_details/entities/order_detail.entity'; // Importa la entidad OrderDetails
import { Role } from '../auth/enum/roles.enum';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>, // Inyecta el repositorio de Order si es necesario
    @InjectRepository(OrderDetail)
    private readonly orderdetailsRepository: Repository<OrderDetail>, // Inyecta el repositorio de OrderDetails si es necesario
  ) {}

  // 1. Estadísticas de usuarios

  async getUserStats() {
    try {
      // Total de usuarios
      const totalUsers = await this.userRepository.count();

      // usuarios activos en los últimos 7 días
      const activeUsers = await this.userRepository
        .createQueryBuilder('users')
        .where('users.lastLogin >= :date', {
          date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        })
        .getCount();

      // usuarios nuevos en los últimos 30 días
      const newUsers = await this.userRepository
        .createQueryBuilder('users')
        .where('users.createdAt >= :date', {
          date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        })
        .getCount();

      return { totalUsers, activeUsers, newUsers };
    } catch (error) {
      throw new HttpException(
        'Error to get user stats.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // 2. Métricas de negocio
  async getOrderStats() {
    try {
      // Total de ordenes
      const totalOrders = await this.orderRepository.count();

      // Productos más vendidos
      const topProducts = await this.orderdetailsRepository
        .createQueryBuilder('orderdetails')
        .select('product.name', 'productName')
        .addSelect('product.id', 'productId')
        .addSelect('SUM(orderdetails.quantity)', 'totalSold')
        .leftJoin('orderdetails.product', 'product')
        .groupBy('product.id, product.name')
        .orderBy('"totalSold"', 'DESC')
        .limit(5)
        .getRawMany();

      return { totalOrders, topProducts };
    } catch (error) {
      throw new HttpException(
        'Error to get order stats.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // 3. Top compradores
  async getBuyersStats() {
    try {
      const topBuyers = await this.userRepository
        .createQueryBuilder('users')
        .leftJoin('users.orders', 'orders')
        .select(['users.id', 'users.uid', 'users.name', 'users.email'])
        .addSelect('COUNT(orders.id)', 'ordersCount')
        .groupBy('users.id')
        .orderBy('"ordersCount"', 'DESC')
        .limit(5)
        .getRawMany();

      return topBuyers;
    } catch (error) {
      throw new HttpException(
        'Error to get top buyers stats.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // 4. Top usuarios más frecuentes
  async getTopFrequentUsers() {
    try {
      const topFrequentUsers = await this.userRepository
        .createQueryBuilder('user')
        .select([
          'user.id',
          'user.uid',
          'user.name',
          'user.email',
          'user.loginCount',
        ])
        .orderBy('user.loginCount', 'DESC')
        .limit(5)
        .getMany();

      return topFrequentUsers;
    } catch (error) {
      throw new HttpException(
        'Error al obtener los usuarios más frecuentes',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
