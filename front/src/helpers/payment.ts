"use client"
import { IUserpay } from "@/interfaces/IOrder";

const APIURL = process.env.NEXT_PUBLIC_API_URL


export const createOrder = async (userPay: IUserpay) => {
    try {
        const response = await fetch(`${APIURL}/payments/intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount: userPay.amount * 100,
                currency: userPay.currency,
                paymentMethodId: userPay.paymentMethodId
            })
        });

        console.log("Status de la respuesta:", response.status);
        console.log("Respuesta completa:", response);

        if (response.ok) {
            const data = await response.json();
            console.log(`esto me devuelve data createOrder`, data);
            return data.client_secret;
        } else {
            console.log("La API devolvió un error:", await response.json());
        }

    } catch (error) {
        console.log("Aca esta el error", error);
    }
};
