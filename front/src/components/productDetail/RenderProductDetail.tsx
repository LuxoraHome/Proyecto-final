"use client"

import { iProducts } from "@/interfaces/iProducts";
import React from "react";
import { useRouter } from "next/navigation";

export const RenderProductDetail: React.FC<iProducts> = ({ name, image, description, price, product, id }) => {

    const router = useRouter()

    const onClick = () => {
        const cart: iProducts[] = JSON.parse(localStorage.getItem("cart") || "[]")
        if (cart) {
            cart.push({ image, name, price, product ,id })

            alert("Product Add")
            console.log(`asi se guardan los products ${cart}`);
            localStorage.setItem("cart", JSON.stringify(cart))
            router.push("/cart")
        }

    }

    return (
        <div key={id}>
            <img src={image} />

            <div>
                <h3 className="font-bold" >{name}</h3>
                <h3 className="text-gray-500">{product}</h3>
                <h3>{description}</h3>
                <h3>${price}</h3>
            </div>
            <div>
                <button onClick={onClick}>
                    ADD CART
                </button>
            </div>
        </div>
    )



}


export default RenderProductDetail;