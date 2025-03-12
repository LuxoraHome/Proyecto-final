import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { User } from '../../user/entities/user.entity';
import { ordersMock } from './orders-mock';

@Injectable()
export class OrderSeed {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findOrders(order: Date) {
        const findOrder = await this.orderRepository.findOne({
            where: { date: order }
        })

        if (!findOrder) {
            throw new Error(`Order ${order} not found`)
        }
        return findOrder;
    }
    async createSeedOrder() {
        const existingOrderDate = (await this.orderRepository.find()).map(
            (order) => order.date,
        )

        for (const orderData of ordersMock) {
            if (!existingOrderDate.includes(orderData.date)) {

                const newOrder = new Order();
                newOrder.date = orderData.date;
                newOrder.status = orderData.status;
                newOrder.shippingAddress = orderData.shippingAddress;
                newOrder.total = orderData.total;
                newOrder.user = await this.userRepository.findOne({ where: { uid: orderData.user_uid } })
                await this.orderRepository.save(newOrder);

            } else {
                return "Ya existen productos"
            }
        }
    }




}