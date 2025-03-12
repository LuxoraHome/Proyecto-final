"use client"

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Currency } from "lucide-react";

const APIURL = process.env.NEXT_PUBLIC_API_URL




export interface IUserpay {
    amount: number;
    currency : string ,
}




export const createOrder = async (userPay: IUserpay) => {

    try {
        const response = await fetch(`${APIURL}/payments/intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({amount :userPay.amount * 100 , currency : userPay.currency})
        })

        const data = await response.json()
        console.log(`Esto me devuelve el back al hacer la funcion` , data);
        return data.clientSecret;


    } catch (error) {
        console.log(`Aca esta el error`, error);

    }


}





