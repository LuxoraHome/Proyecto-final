"use client"


import { iProducts } from "@/interfaces/iProducts";
import { iRenderProps } from "@/interfaces/iProps";
import { useRouter } from "next/navigation";

import React from "react";



export const ProductRender: React.FC<iRenderProps> = ({ products }) => {

    const { name, image, price, id, product } = products;
    const router = useRouter()

    const onClick = () => {
        router.push(`/productDetail/${id}`)
    }

    const onClick2 = () => {
        const productB: iProducts[] = JSON.parse(localStorage.getItem("cart") || "[]")
        if (productB) {
            productB.push({ image, name, price, product, id })
            localStorage.setItem('cart', JSON.stringify(productB))
        }
        router.push('/cart')
    }




    return (<div key={id} className="flex items-center content-center flex-col w-full sm:w-1/2 lg:w-1/4 gap-2 border-b border-gray-400 pb-4 ">
        <img src={image} />
        <h3 className="font-bold">{name}</h3>
        <p className="text-gray-500">{product}</p>
        <h3 className="font-bold">${price}</h3>

        <div className="flex items-center gap-5 mt-5">
            <button
                className="px-3 py-1.5 text-black border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
                onClick={onClick}
            >
                DETAILS
            </button>

            <button
                className="px-3 py-1.5 text-black border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
                onClick={onClick2}
            >
                BUY
            </button>
        </div>
    </div>)

}


export default ProductRender;