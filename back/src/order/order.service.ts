import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { OrderDetail } from 'src/order_details/entities/order_detail.entity';
import { User } from 'src/user/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';
import { OrderDetailsService } from 'src/order_details/order_details.service';
import { UserService } from 'src/user/user.service';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly orderDetailService: OrderDetailsService,
    private readonly userService: UserService,
    private readonly productService: ProductService,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const { userId, orderDetails } = createOrderDto;
    
    const findUser = await this.userService.findOneById(userId);
    if (!findUser) throw new NotFoundException('User not found');
    
    const order = this.orderRepository.create({ user: findUser, total: 0 });
    await this.orderRepository.save(order);

    let total = 0;


    for (const element of orderDetails) {
      const product = await this.productService.findOneById(element.productId);
      if (!product)
        throw new NotFoundException(`Product ${element.productId} not found`);
      if (product.stock < element.quantity)
        throw new BadRequestException(`Not enough stock for ${product.name}`);

      const subtotal = element.quantity * product.price;
      total += subtotal;

      await this.orderDetailService.create({
        order: order,
        product: product,
        quantity: element.quantity,
        unitPrice: product.price,
        subtotal: subtotal,
      });

      product.stock -= element.quantity;
      await this.productService.updateProduct(product.id, {
        stock: product.stock,
      });
    }

    order.total = total;
    await this.orderRepository.save(order);

    return order;
  }

  async findAllOrders() {
    return await this.orderRepository.find();
  }

  async findOneOrder(id: string) {
    const order = await this.orderRepository.findOne({ where: { id },
      relations: ['user', 'orderDetails', 'orderDetails.product'],
    });

    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }

    return order;
  }

  async findUserById(id: string) {
    const user = await this.userService.findOneById(id)
    const order = await this.orderRepository.find({
      where: { user: { id: user.id } },
    });
    return { order: order, user };  
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
