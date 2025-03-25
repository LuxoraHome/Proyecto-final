

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





export const getProductsId = async (id: string) => {
    const APIURL = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await fetch(`${APIURL}/product/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`There was an error fetching the product: ${error}`);
      return null;
    }
  };

