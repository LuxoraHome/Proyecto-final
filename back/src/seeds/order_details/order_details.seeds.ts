import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { OrderDetail } from '../../order_details/entities/order_detail.entity';
import { orderDetailsMock } from './order_details-mock';
import { User } from 'src/user/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class OrderDetailSeed {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(OrderDetail)
        private readonly orderDetailRepository: Repository<OrderDetail>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }

    async orderDetailSeed() {
        for (const orderData of orderDetailsMock) {
            const user = await this.userRepository.findOneBy({ uid: orderData.uid });

            if (!user) {
                console.error(`User with uid ${orderData.uid} not found`);
                continue;
            }

            const order = this.orderRepository.create({
                user,
                status: orderData.status,
                shippingAddress: orderData.shippingAddress,
                total: 0,
                image: orderData.image
            });
            const savedOrder = await this.orderRepository.save(order);

            let totalOrder = 0;
            for (const detailData of orderData.orderDetails) {

                const product = await this.productRepository.findOneBy({ name: detailData.productName });

                if (!product) {
                    console.error(`Product with id ${detailData.productName} not found`);
                    continue;
                }

                const unitPrice = product.price;
                const subtotal = unitPrice * detailData.quantity;

                const orderDetail = this.orderDetailRepository.create({
                    order: savedOrder,
                    product,
                    quantity: detailData.quantity,
                    unitPrice,
                    subtotal,
                });

                await this.orderDetailRepository.save(orderDetail);
                totalOrder += subtotal;
            }

            await this.orderRepository.update(savedOrder.id, { total: totalOrder });
        }
    }
}