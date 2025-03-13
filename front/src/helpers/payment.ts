"use client"


const APIURL = process.env.NEXT_PUBLIC_API_URL




export interface IUserpay {
    amount: number;
    currency: string,
    paymentMethodId: string,
}




export const createOrder = async (userPay: IUserpay) => {

    try {
        const response = await fetch(`${APIURL}/payments/intents`
            , {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: userPay.amount * 100, currency: userPay.currency, paymentMethodId: userPay.paymentMethodId })
            })

        const data = await response.json()

console.log("esto me devuelve el back", data);


        return data.client_secret



    } catch (error) {
        console.error("❌ Error en createOrder:", error);
        console.log("Aca esta el error", error);

    }


}