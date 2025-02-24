export interface iProducts {
    id?: number,
    categoriId?: string,
    stock?: string,
    name: string,
    image: string,
    price: string,
    product: string,
    description : string,
} 

export interface iPro {
    products : iProducts
}