

"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";

const API_PUBLIC = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const stripePromise = loadStripe(`${API_PUBLIC}`);


interface IStripe {
  children : React.ReactNode
}

export  const StripeClient : React.FC<IStripe> = ({children})=>{
return (<Elements stripe={stripePromise}>{children}</Elements>)

}


export default StripeClient ;