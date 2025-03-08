
const APIURL=process.env.NEXT_PUBLIC_API_URL


export const getProducts = async () => {
    try {
        const response = await fetch(`${APIURL}/product`)
       
        const data = await response.json()
        return data
    } catch (error) {
        console.log(`here is the error ${error}`);
    }
}



export const getProductsId = async (id: number) => {
    try {
        const response = await fetch(`${APIURL}/product/${id}`)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(`there is the ${error}`);
    }
}

