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

    async intent(amount:number, currency:string, paymentMethodId:string) {
        const paymentIntent = await  this.stripe.paymentIntents.create({
            amount,
            currency,
            payment_method: paymentMethodId,
            confirm: false,
            payment_method_types: ['card'],
        });

        return { client_secret: paymentIntent.client_secret, id: paymentIntent.id };
    }

    async confirm(IntentId:string) {
        return this.stripe.paymentIntents.confirm(IntentId);
    }

    async retrievePaymentIntent(intentId: string) {
        return this.stripe.paymentIntents.retrieve(intentId);
    }

}