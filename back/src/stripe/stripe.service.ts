import { Injectable } from "@nestjs/common";
import Stripe from "stripe";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class StripeService {
    private stripe:Stripe;
    constructor (private cinfigservice:ConfigService){
        this.stripe = new Stripe(cinfigservice.get<string>('STRIPE_SECRET_KEY'),{
            apiVersion: '2025-02-24.acacia',
        })
    }

    async intent(amount:number, currency:string) {
        return this.stripe.paymentIntents.create({
            amount,
            currency,
        });
    }
}