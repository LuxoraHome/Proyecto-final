import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Order } from '../order/entities/order.entity';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { AuthModule } from '../auth/auth.module'; // Importa otros módulos si es necesario
import { MailModule } from '../mail/mail.module'; // Importa otros módulos si es necesario
import { OrderDetail } from 'src/order_details/entities/order_detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Order, OrderDetail]),
    AuthModule, // Importa AuthModule si necesitas usar sus servicios
    MailModule, // Importa MailModule si necesitas usar sus servicios
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule { }