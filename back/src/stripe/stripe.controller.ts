import { Body, Controller, Post } from "@nestjs/common";
import { StripeService } from "./stripe.service";
import Stripe from "stripe";

@Controller('payments')
export class StripeController {
    constructor(private readonly stripeService: StripeService) { }

    @Post('intent')
    async intent(@Body() body: { amount: number; currency: string }) {
        return this.stripeService.intent(body.amount, body.currency);
    }
}