export interface IOrderDetail {
    productId : string ,
    quantity  : number ,
}


export interface ICheckout {
    uid : string ,
    ordenDetails : IOrderDetail[],
}