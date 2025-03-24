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
import { OrderDetailsService } from 'src/order_details/order_details.service';
import { UserService } from 'src/user/user.service';
import { ProductService } from 'src/product/product.service';
import { OrderStatusEnum } from './orderStatus-enum';
import { MailService } from '../mail/mail.service'; // Se importa el servicio de mail
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly orderDetailService: OrderDetailsService,
    private readonly userService: UserService,
    private readonly productService: ProductService,
    private readonly mailService: MailService, // Se inyecta el servicio de mail
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const { uid, orderDetails } = createOrderDto;

    const findUser = await this.userService.findOneById(uid);
    if (!findUser) throw new NotFoundException('User not found');

    let total = 0;
    let firstProductImage: string | null = null;

    // Validamos que la orden tenga detalles antes de crearla
    if (!orderDetails || orderDetails.length === 0) {
      throw new BadRequestException('Order must have at least one product');
    }

    for (const element of orderDetails) {
      const product = await this.productService.findOneById(element.productId);
      if (!product)
        throw new NotFoundException(`Product ${element.productId} not found`);
      if (product.stock < element.quantity)
        throw new BadRequestException(`Not enough stock for ${product.name}`);

      const subtotal = element.quantity * product.price;
      total += subtotal;

      if (!firstProductImage && product.image) {
        firstProductImage = product.image;
      }
    }

    // ✅ Ahora sí creamos la orden con los valores correctos
    const order = this.orderRepository.create({
      user: findUser,
      total,
      status: OrderStatusEnum.PAID,
      image: firstProductImage,
      shippingAddress: findUser.address,
    });

    await this.orderRepository.save(order);

    // Ahora asociamos los productos a la orden
    for (const element of orderDetails) {
      await this.orderDetailService.create({
        orderId: order.id,
        productId: element.productId,
        quantity: element.quantity,
        unitPrice: (await this.productService.findOneById(element.productId))
          .price,
        subtotal:
          element.quantity *
          (await this.productService.findOneById(element.productId)).price,
      });

      const product = await this.productService.findOneById(element.productId);
      product.stock -= element.quantity;
      await this.productService.updateProduct(product.id, {
        stock: product.stock,
      });
    }

    await this.sendOrderConfirmationEmail(findUser.email, order);

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

    order.image =
      order.image ||
      (order.orderDetails.length > 0
        ? order.orderDetails[0].product.image
        : 'URL_DE_IMAGEN_POR_DEFECTO');

    return order;
  }

  async findUserById(uid: string) {
    const user = await this.userService.findOneById(uid);

    if (!user) {
      throw new NotFoundException(`Usuario con UID ${uid} no encontrado`);
    }

    const orders = await this.orderRepository.find({
      where: { user: { uid: user.uid } },
      relations: ['orderDetails', 'orderDetails.product'],
    });

    const ordersWithImages = orders.map((order) => ({
      ...order,
      image:
        order.image ||
        (order.orderDetails.length > 0
          ? order.orderDetails[0].product.image
          : 'URL_DE_IMAGEN_POR_DEFECTO'),
    }));

    return { orders: ordersWithImages, user };

    // return { orders: orders, user };
  }

  async updateOrder(id: string, updateOrderDto: UpdateOrderDto) {
    // Buscar la orden existente
    const order = await this.orderRepository.findOne({ where: { id } });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    // Actualizar solo los campos proporcionados en updateOrderDto
    Object.assign(order, updateOrderDto);

    // Guardar los cambios en la base de datos
    await this.orderRepository.save(order);

    return {
      message: 'Order updated successfully',
      order,
    };
  }

  async removeOrder(id: string) {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['orderDetails'],
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    for (const detail of order.orderDetails) {
      await this.orderDetailService.removeOrderDetail(detail.id);
    }

    await this.orderRepository.delete(id);

    return {
      message: 'Order deleted successfully',
      orderId: id,
    };
  }

  // Se crea el método para enviar el email de confirmación de la orden
  private async sendOrderConfirmationEmail(email: string, order: Order) {
    const subject = 'Confirmación de compra';
    const text = `Gracias por tu compra. Tu orden #${order.id} ha sido procesada correctamente.\n\nDetalles de la orden:\nTotal: $${order.total}\nEstado: ${order.status}`;

    await this.mailService.sendMail(email, subject, text);
  }
}
