export interface IStatsUser {
    totalUsers: number;
    activeUsers: number;
    newUsers: number;
}

export interface ITopProduct {
    productId: string;
    productName: string;
    totalSold: number;
}

export interface IStatsOrder {
    totalOrders: number;
    topProducts: ITopProduct[];
}

export interface IStatsBuyer {
    users_id: string;
    users_uid: string;
    users_name: string;
    users_email: string;
    ordersCount: string;
}

export interface IStatsLoguer {
    id: string;
    uid: string;
    name: string;
    email: string;
    loginCount: number;
}