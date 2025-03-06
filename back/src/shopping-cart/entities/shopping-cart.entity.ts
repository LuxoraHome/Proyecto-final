import { ApiProperty } from "@nestjs/swagger";
import { CartProducts } from "src/cart-products/carProducts.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "carts" })
export class ShoppingCart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => User, { eager: true })
  @JoinColumn()
  user: User;

  // @ApiProperty({ type: () => [CartProducts] }) 
  @OneToMany(() => CartProducts, (cartProduct) => cartProduct.cart, { cascade: true })
  cartProducts: CartProducts[];

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  totalPrice: number;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  shippingCost: number;
}