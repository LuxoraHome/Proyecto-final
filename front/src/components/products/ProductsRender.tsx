"use client"


import { iRenderProps } from "@/interfaces/iProps";
import { useRouter } from "next/navigation";

import React from "react";



export const ProductRender: React.FC<iRenderProps> = ({ products }) => {

    const router = useRouter()

    const onClick = () => {
        router.push(`/productDetail/${id}`)
    }


    const { name, image, price, id, product } = products;


    return (<div key={id} className="flex items-center content-center flex-col w-full sm:w-1/2 lg:w-1/4 gap-2 border-b border-gray-400 pb-4 ">
        <img src={image} />
        <h3 className="font-bold">{name}</h3>
        <p className="text-gray-500">{product}</p>
        <h3 className="font-bold">${price}</h3>

        <div>
            <button className="text-gray-600 font-medium" onClick={onClick}>
                DETAILS
            </button>
        </div>
    </div>)

}


export default ProductRender;