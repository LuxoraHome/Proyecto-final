export interface iProducts {
    id: string,
    categoryId: string,
    stock?: string,
    name?: string ,
    image?: string,
    price: number,
    product?: string,
    description? : string,
<<<<<<< HEAD
    quantity?: number ,
=======
    quantity : number ,
    type: string,
    color: string
>>>>>>> developfront
} 

export interface iPro {
    products : iProducts
}