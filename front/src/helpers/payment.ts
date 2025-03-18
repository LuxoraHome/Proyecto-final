"use client"
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const APIURL = process.env.NEXT_PUBLIC_API_URL




export interface IUserpay {
    amount: number;
    currency: string,
    paymentMethodId: string,
}




export const createOrder = async (userPay: IUserpay) => {

    try {
        const response = await fetch(`${APIURL}/payments/intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: userPay.amount * 100, currency: userPay.currency, paymentMethodId: userPay.paymentMethodId })
        })

        const data = await response.json()

        if (!data.client_secret) {
            console.error("Error: client_secret no recibido", data);
            return { success: false, message: "No se recibió client_secret" };
        }

        return data.client_secret; 

    } catch (error) {
        console.log(`Aca esta el error`, error);

    }


}





