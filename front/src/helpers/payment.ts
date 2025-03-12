"use client"

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const APIURL = process.env.NEXT_PUBLIC_API_URL




interface IUserpay {
    ammount: number;
}




export const createOrder = async (userPay: IUserpay) => {

    try {
        const response = await fetch(`${APIURL}`, {
            method: "POST",
            headers: { "Content:type": "application/json" },
            body: JSON.stringify(userPay.ammount * 100)
        })

        const data = await response.json()
        console.log(`Esto me devuelve el back al hacer la funcion` , data);
        return data.clientSecret;


    } catch (error) {
        console.log(`Aca esta el error`, error);

    }


}





