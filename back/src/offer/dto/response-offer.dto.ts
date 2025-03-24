export class ResponseOfferDto {
    id: string;
    productId: string;
    productName: string;
    price: number;
    discount: number;
    finalPrice: number;
    startDate: Date;
    endDate: Date;
}