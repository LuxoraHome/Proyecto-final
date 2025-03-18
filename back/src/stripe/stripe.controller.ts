import { Body, Controller, Post } from "@nestjs/common";
import { StripeService } from "./stripe.service";
import Stripe from "stripe";

@Controller('payments')
export class StripeController {
    constructor(private readonly stripeService: StripeService) { }

    @Post('intent')
    async intent(@Body() body: { amount: number; currency: string; paymentMethodId: string  }) {
        return this.stripeService.intent(body.amount, body.currency, body.paymentMethodId);
    }

    @Post('confirm')
    async confirm(@Body() body: { payIntentId: string }) {

        const { payIntentId } = body
        const paymentIntent = await this.stripeService.retrievePaymentIntent(payIntentId);

        console.log("Estado actual:", paymentIntent.status);

        if (paymentIntent.status === 'succeeded') {
            return { success: true, message: 'Pago realizado con exito', paymentIntent };
        }else if (paymentIntent.status === 'requires_payment_method') {
            return { success: false, message: 'Pago fallido, intenta de nuevo', paymentIntent };
        }else{
            return { success: false, message: 'Pago fallido', paymentIntent };
        }

       // return this.stripeService.confirm(body.payIntentId);


    }
}