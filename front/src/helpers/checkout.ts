import { ICheckout } from "@/interfaces/ICheckout";
import Swal from "sweetalert2";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const userCheckout = async (orderData: ICheckout) => {
    try {
        const response = await fetch(`${APIURL}/order`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(orderData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('esta data mandamos en checkout al back' , data);
            
            return data
        }

    } catch (error) {
        console.log(`Error:`, error);
        Swal.fire({
            icon: "error",
            title: "Checkout Failed",
            text: "There was an issue processing your order. Please try again."
        });

    }
};
