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
import { OrderStatusEnum } from './orderStatus-enum';
import { MailService } from '../mail/mail.service'; // Se importa el servicio de mail

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly orderDetailService: OrderDetailsService,
    private readonly userService: UserService,
    private readonly productService: ProductService,
    private readonly mailService: MailService, // Se inyecta el servicio de mail
  ) { }

  async createOrder(createOrderDto: CreateOrderDto) {
    const { uid, orderDetails } = createOrderDto;

    const findUser = await this.userService.findOneById(uid);
    if (!findUser) throw new NotFoundException('User not found');

    const order = this.orderRepository.create({
      user: findUser,
      total: 0,
      status: OrderStatusEnum.PENDING
    });
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

    await this.sendOrderConfirmationEmail(findUser.email, order) // Se envía el email de confirmación de la orden

    return order;
  }

  async findAllOrders() {
    return await this.orderRepository.find();
  }

  async findOneOrder(id: string) {
    const order = await this.orderRepository.findOne({
      where: { id },
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

  async updateOrderStatus(orderId: string, status: OrderStatusEnum) {
    const order = await this.orderRepository.findOne({ where: { id: orderId } });
    if (!order) throw new NotFoundException('Order not found');

    order.status = status;
    await this.orderRepository.save(order);
    return order
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }

  // Se crea el método para enviar el email de confirmación de la orden
  private async sendOrderConfirmationEmail(email: string, order: Order) {
    const subject = 'Confirmación de compra';
    const text = `Gracias por tu compra. Tu orden #${order.id} ha sido procesada correctamente.\n\nDetalles de la orden:\nTotal: $${order.total}\nEstado: ${order.status}`;

    await this.mailService.sendMail(email, subject, text);
  }
}
