"use client"
import React from "react"
import { iProducts } from "@/interfaces/iProducts"
import { useState, useEffect } from "react"
import { ICheckout, IOrderDetail } from "@/interfaces/ICheckout"
import { userCheckout } from "@/helpers/checkout"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Swal from "sweetalert2";
import { createOrder } from "@/helpers/payment"
import { IUserpay } from "@/interfaces/IOrder"


export const CartComponent: React.FC = () => {

    const { user } = useAuth()
    const router = useRouter()
    const [cart, setCart] = useState<iProducts[]>([])
    const [price, setPrice] = useState<number>(0)
    const stripe = useStripe()
    const elements = useElements()



    useEffect(() => {
        const products: iProducts[] = JSON.parse(localStorage.getItem("cart") || "[]")
        if (products) {
            const total = products.reduce((acc, items: iProducts) => acc + items.price, 0)
            setCart(products)
            setPrice(total)
        }
    }, [])

    const handelDelete = (id: string) => {
        const removedProduct = cart.filter((product) => product.id !== id)
        localStorage.setItem("cart", JSON.stringify(removedProduct))
        setCart(removedProduct)
        const total = removedProduct.reduce((acc, item) => acc + item.price, 0);
        setPrice(total);
    }

    const handelOnClick = async () => {
        if (!user?.uid) {
            router.push("/login")
            return
        }
console.log('esto tengo en mi cart de procutos' , cart);


        const ordenDetail: IOrderDetail[] = cart.map((products) => ({
            productId: products.id,
            quantity: 1,
        }))


        console.log('esta info tengo en user cuando hago login con goolge!!!', user);


        const ordenData: ICheckout = {
            uid: user.uid,
            orderDetails: ordenDetail,
        }

        const response = await userCheckout(ordenData)
        console.log(`data de checkout`, response);


        if (!stripe || !elements) {
            Swal.fire({
                icon: "error",
                title: "Error de Pago",
                text: "Stripe no está disponible. Intenta recargar la página.",
            });
            return;
        }


        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)!,
        })

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Fail Payment",
                text: error.message,
            });
            return;
        }
        if (!paymentMethod) {
            Swal.fire({
                icon: "error",
                title: "Payment Method Error",
                text: "No se pudo crear el método de pago.",
            });
            return;
        }


        const userPay: IUserpay = {
            amount: price,
            currency: "USD",
            paymentMethodId: paymentMethod.id,
        }



        const clientSecret = await createOrder(userPay)
        console.log(`Esto devuelvo el back al hacer la funcion CreateOrder`, clientSecret);

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethod.id
        })



        if (result.paymentIntent?.status === "succeeded") {
            console.log("🎉 Pago exitoso:", result.paymentIntent);
            Swal.fire({
                icon: "success",
                title: "Payment Successful",
                text: "Your order has been placed successfully."
            });
            setCart([])
            localStorage.removeItem("cart")

        }


        else if (result.error) {
            Swal.fire({
                icon: "error",
                title: "Payment Failed",
                text: result.error.message,
            });


        }
    }


    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-4xl font-semibold tracking-wide text-gray-800 mb-6">Your Cart</h2>

            {cart.length > 0 ? (
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md bg-white">
                            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />

                            <div className="flex-1 ml-4">
                                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-gray-600">{item.product}</p>
                                <h3 className="text-lg font-bold text-gray-900">${item.price}</h3>
                            </div>

                            <button
                                onClick={() => handelDelete(item.id)}
                                className="text-black font-bold text-l"
                            >
                                ✖
                            </button>
                        </div>
                    ))}

                    <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800">Total:</h3>
                        <h3 className="text-xl font-bold text-gray-900">${price.toFixed(2)}</h3>
                    </div>

                    <div className="relative space-y-8 border-2 border-gray-300 p-4 rounded-lg">

                        <div style={{ padding: "12px", backgroundColor: "#f7f7f7" }}>
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: "20px",
                                            color: "#333",
                                            "::placeholder": {
                                                color: "#bbb",
                                            },
                                        },
                                        invalid: {
                                            color: "#e53e3e",
                                            iconColor: "#e53e3e",
                                        },
                                    },
                                }}
                            />
                        </div>

                        <button onClick={handelOnClick} className="w-full bg-black text-white text-lg font-medium py-3 rounded-lg hover:bg-gray-900 transition-all">
                            PAY
                        </button>
                    </div>

                </div >
            ) : (
                <div className="text-center mt-12">
                    <h3 className="text-2xl text-gray-500">Your cart is empty</h3>
                </div>
            )}
        </div >
    )
}

export default CartComponent;