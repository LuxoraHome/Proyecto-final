import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity({
    name: 'offers'
})
export class Offer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'uuid' })
    productId: string;

    @Column({ length: 100, nullable: false })
    productName: string;

    @Column({ type: 'double precision', nullable: false })
    priceProduct: number;

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    discountPriceProduct: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    finalPriceProduct: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    startOfferDate: Date;

    @Column({ type: 'timestamp' })
    endOfferDate: Date;

    @ManyToOne(() => Product, (product) => product.offers)
    @JoinColumn({ name: 'productId' })
    product: Product;

}