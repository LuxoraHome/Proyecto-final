import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order_details.service';
import { OrderDetailsController } from './order_details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetail } from './entities/order_detail.entity';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([OrderDetail, Order, Product]),
  OrderDetailsModule],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
})
export class OrderDetailsModule {}
