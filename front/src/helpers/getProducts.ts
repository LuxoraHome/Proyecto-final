import { iProducts } from "@/interfaces/iProducts"
import products from "./products"

const APIURL=process.env.NEXT_PUBLIC_API_URL


export const getProductsId = (id: number) => {

    const data: iProducts[] = products;

    const filtredProducts = data.find((item: iProducts) => (item.id === id))

    return filtredProducts;
}

export const searchProduct = (query: string, products: iProducts[]): iProducts[] => {
    if(!query) return products

    return products.filter((product) => 
        product.name && product.name?.toLowerCase().includes(query.toLowerCase())
    )

}