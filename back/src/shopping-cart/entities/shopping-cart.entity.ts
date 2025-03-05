import { CartProducts } from "src/cart-products/carProducts.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: "carts"
})
export class ShoppingCart {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => User, { eager: true })
  @JoinColumn()
  user: User;

  @OneToMany(() => CartProducts, (carPro) => carPro.cart)
  carPro: CartProducts[];

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalPrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  shippingCost: number;
}
