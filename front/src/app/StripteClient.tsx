

"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);


interface IStripe {
  children : React.ReactNode
}

export  const StripeClient : React.FC<IStripe> = ({children})=>{
return (<Elements stripe={stripePromise}>{children}</Elements>)

}


export default StripeClient ;