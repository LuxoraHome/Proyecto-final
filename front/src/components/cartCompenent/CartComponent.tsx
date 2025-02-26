"use client"
import React from "react"
import { iProducts } from "@/interfaces/iProducts"
import { useState, useEffect } from "react"


export const CartComponent: React.FC = () => {

    const [cart, setCart] = useState<iProducts[]>([])
    const [price, setPrice] = useState<number>(0)


    useEffect(() => {
        const products: iProducts[] = JSON.parse(localStorage.getItem("cart") || "[]")



        if (products) {
            const total = products.reduce((acc, items: iProducts) => acc + items.price, 0)
            setCart(products)
            setPrice(total)
        }
    }, [])



    return (

        <div>
            <h2 className="semi-bold mt-4 text-4xl tracking-wide ml-6">Cart</h2>
            {cart ? (cart.map((items) => (
                
                <div key={items.id} className=" flex flex-row  items-center content-center gap-4 p-6 border border-gray-300 rounded-lg shadow-sm mt-6 w-1/2 ml-6" >
                    <img src={items.image} className="w-64 h-36 object-cover rounded-md" />
                    <div className="flex flex-col">
                    <h3 className="font-bold">{items.name}</h3>
                    <h3>{items.product}</h3>
                    <h3 className="font-bold">${items.price}</h3>
                    </div>
                </div>
            ))) : (<div>
                <h3>You dont have products</h3>
            </div>)}

            <div>
            <h3>  Account: ${price}</h3>
            </div>

            
        </div>

    )


}

export default CartComponent;