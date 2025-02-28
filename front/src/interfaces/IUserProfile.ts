import { IOrder } from "./IOrder";

export interface IUserProfile {

    id: string;
    name: string;
    email: string;
    address: string;
    phone: number;
    client: "Standard" | "Vip";
    orders: IOrder[]

}
