export interface iProducts {
    id: string,
    category?: {
        type: string;
        id:string ,
        color: string;
      },
 
    stock?: string,
    name?: string ,
    image?: string,
    price: number,
    product?: string,
    description? : string,
    quantity?: number ,
} 

export interface iPro {
    products : iProducts
}