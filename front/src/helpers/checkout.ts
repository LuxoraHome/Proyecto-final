import { ICheckout } from "@/interfaces/ICheckout";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const userCheckout = async (orderData: ICheckout) => {
    try {

        const response = await fetch(`${APIURL}/order`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(orderData)
        })
        if (response.ok) {
            alert("Buy successful")
            return response.json()
        }


        const errorResponse = await response.json();
        console.log("Error en la respuesta del servidor:", errorResponse);
        return;
    }
    catch (error) {
        console.log(`aca esta el error`, error);

    }

}