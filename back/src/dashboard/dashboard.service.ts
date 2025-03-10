import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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
  ) { }

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
        .addSelect('COUNT(orderdetails.product_id)', 'totalSold')
        .leftJoin('orderdetails.product', 'product')
        .groupBy('product.name')
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
        .createQueryBuilder('user')
        .leftJoin('user.orders', 'order') // Relación con la entidad Order
        .select(['user.id', 'user.name', 'user.email']) // Selecciona campos del usuario
        .addSelect('COUNT(order.id)', 'orderCount') // Cuenta las órdenes por usuario
        .groupBy('user.id') // Agrupa por usuario
        .orderBy('orderCount', 'DESC') // Ordena por número de órdenes (de mayor a menor)
        .limit(5) // Limita a los 5 primeros
        .getRawMany(); // Obtiene los resultados en formato raw

      return topBuyers;
    } catch (error) {
      throw new HttpException(
        'Error al obtener el top de compradores',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // ----- 3. Gestión de usuarios *** modoficar esta ruta

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