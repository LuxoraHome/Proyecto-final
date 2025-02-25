"use client"
import React from "react"
import { iProducts } from "@/interfaces/iProducts"
import { useState, useEffect } from "react"


export const CartComponent: React.FC = () => {

    const [cart, setCart] = useState<iProducts[]>([])
    const [price, setPrice] = useState<number>(0)

    
    useEffect(() => {
        const products : iProducts[] = JSON.parse(localStorage.getItem("cart") || "[]")
       
        
        
        if (products) {
       const total = products.reduce((acc , items:iProducts)=> acc + items.price  ,0)
            setCart(products)
            setPrice(total)
        }
    }, [])



    return (
        <div>

            {cart ? (cart.map((items) => (
                <div key={items.id}>
                    <h3>{items.name}</h3>
                    <img src={items.image} />
                    <h3>{items.product}</h3>
                    <h3>${items.price}</h3>

                </div>
            ))) : (<div>
                <h3>You dont have products</h3>
            </div>)}

            <div>
                <h3> total account: ${price}</h3>
            </div>

        </div>
    )


}

export default CartComponent ;