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
            Swal.fire({
                icon: "success",
                title: "Checkout Successful",
                text: "Your order has been placed successfully."
            });
            return response.json();
        }

        const errorResponse = await response.json();
        console.log("Error en la respuesta del servidor:", errorResponse);

        Swal.fire({
            icon: "error",
            title: "Checkout Failed",
            text: "There was an issue processing your order. Please try again."
        });

        return;
    } catch (error) {
        console.log(`Error:`, error);

        Swal.fire({
            icon: "error",
            title: "Network Error",
            text: "An unexpected error occurred. Please check your connection and try again."
        });
    }
};
