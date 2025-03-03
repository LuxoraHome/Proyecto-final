import { iProducts } from "@/interfaces/iProducts"


const APIURL = process.env.NEXT_PUBLIC_API_URL

export const getProducts = async () => {
    try {
        const response = await fetch(`${APIURL}/product`, { cache: "no-cache" })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(`aca esta el error ${error}`);

    }
}


export const getProductsId = async (id: number) => {

    try {
        const response = await fetch(`${APIURL}/product/${id}`)
        const data = await response.json()
        return data;

    } catch (error) {
        console.log(`hay un error ${error}`);

    }


}




export const searchProduct = (query: string, products: iProducts[]): iProducts[] => {
    if (!query) return products

    return products.filter((product) =>
        product.name && product.name?.toLowerCase().includes(query.toLowerCase())
    )

}