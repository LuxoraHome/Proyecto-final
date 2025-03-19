export interface IPostOffer {
    id? : string;
    productName?: string;
    productDiscount?: number;
    startDate?: Date;
    endDate?: Date;
}

export interface IGetOffers {
    id?: string;
    productId?: string;
    productName?: string;
    priceProduct?: number;
    discountPriceProduct?: number;
    finalPriceProduct?: number;
    startOfferDate?: Date;
    endOfferDate?: Date;
}