import { Product } from "src/product/entities/product.entity";
import { ShoppingCart } from "src/shopping-cart/entities/shopping-cart.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: "cartproducts"
})
export class CartProducts {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => ShoppingCart, (cart) => cart.carPro)
  cart: ShoppingCart;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @Column({ default: 1 })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}