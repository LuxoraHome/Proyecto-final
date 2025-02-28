import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
<<<<<<< HEAD
    return this.orderService.create(createOrderDto);
=======
    return this.orderService.createOrder(createOrderDto);
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
<<<<<<< HEAD
    return this.orderService.findOne(+id);
=======
    return this.orderService.findOne(id);
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
