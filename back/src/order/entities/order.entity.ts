
import { OrderDetail } from 'src/order_details/entities/order_detail.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({
  name: 'orders',
})
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string 
  
    @CreateDateColumn()
    date: Date;

    // Relación N:1 con User
    @ManyToOne(() => User, (user) => user.orders)
    @JoinColumn({ name: 'user_Id' })
    user: User

    @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
    orderDetails: OrderDetail[];

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number;
}
