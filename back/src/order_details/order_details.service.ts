import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from './entities/order_detail.entity';
import { Repository } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createOrderDetailDto: CreateOrderDetailDto) {
    const { orderId, productId, quantity, unitPrice, subtotal } =
      createOrderDetailDto;

    // Busca la orden y el producto en la base de datos
    const order = await this.orderRepository.findOne({
      where: { id: orderId },
    });
    if (!order)
      throw new NotFoundException(`Order with ID ${orderId} not found`);

    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (!product)
      throw new NotFoundException(`Product with ID ${productId} not found`);

    // Crea la relación correctamente asignando instancias de Order y Product
    const orderDetail = this.orderDetailRepository.create({
      order,
      product,
      quantity,
      unitPrice,
      subtotal,
    });

    return await this.orderDetailRepository.save(orderDetail);
  }

  async findAll() {
    return await this.orderDetailRepository.find();
  }

  async findOne(id: string) {
    return await this.orderDetailRepository.findOne({ where: { id } });
  }

  async update(id: string, updateOrderDetailDto: UpdateOrderDetailDto) {
    return await this.orderDetailRepository.update(id, updateOrderDetailDto);
  }

  async removeOrderDetail(id: string) {
    const orderDetail = await this.orderDetailRepository.findOne({
      where: { id },
    });

    if (!orderDetail) {
      throw new NotFoundException(`OrderDetail with ID ${id} not found`);
    }

    await this.orderDetailRepository.delete(id);

    return {
      message: 'OrderDetail deleted successfully',
      orderDetailId: id,
    };
  }
}
