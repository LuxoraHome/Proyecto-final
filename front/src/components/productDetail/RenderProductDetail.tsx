"use client"

import { iProducts } from "@/interfaces/iProducts";
import React from "react";
import { useRouter } from "next/navigation";

export const RenderProductDetail: React.FC<iProducts> = ({ name, image, description, price, product, id }) => {

    const router = useRouter()

    const onClick = () => {
        const cart: iProducts[] = JSON.parse(localStorage.getItem("cart") || "[]")
        if (cart) {
            cart.push({ image, name, price, product, id })

            alert("Product Add")
            console.log(`asi se guardan los products ${cart}`);
            localStorage.setItem("cart", JSON.stringify(cart))
            router.push("/cart")
        }

    }

    return (
        <div key={id} className="flex p-4 ">
            <div className="flex  ">
                <img src={image} />
            </div>
            <div className="flex justify-center flex-col  gap-2 p-4 ">
                <h3 className="font-bold" >{name}</h3>
                <h3 className="text-gray-500">{product}</h3>
                <h3>{description}</h3>
                <h3 className="font-bold">${price}</h3>
                
                <div className="flex items-center content-center">
                <button  onClick={onClick}
                    className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline">
                    ADD CART
                </button>
                </div>

            </div>
        </div>
    )



}


export default RenderProductDetail;