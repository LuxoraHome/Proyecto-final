export interface iProducts {
    id: string,
    categoryId: string,
    stock?: string,
    name?: string,
    image?: string,
    price: number,
    product?: string,
    description? : string,
    quantity : number ,
    type: string,
    color: string
} 

export interface iPro {
    products : iProducts
}