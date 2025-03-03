import { iProducts } from "./iProducts";

export interface IOrder {
    id: number;
    date: Date;
    status: string; 
    products: iProducts[] | [];
  }