

"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const API_PUBLIC = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const stripePromise = loadStripe(`${API_PUBLIC}`);

export default function StripeClient({ children }: { children: React.ReactNode }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
