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
        return response.json();


    } catch (error) {
        console.log(`Error:`, error);
        Swal.fire({
            icon: "error",
            title: "Checkout Failed",
            text: "There was an issue processing your order. Please try again."
        });

    }
};
