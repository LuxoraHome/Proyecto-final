import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order_details.service';
import { OrderDetailsController } from './order_details.controller';
<<<<<<< HEAD

@Module({
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetail } from './entities/order_detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([OrderDetail]),
  OrderDetailsModule],
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
})
export class OrderDetailsModule {}
