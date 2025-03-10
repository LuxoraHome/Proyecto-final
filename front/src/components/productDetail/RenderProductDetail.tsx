"use client"

import { iProducts } from "@/interfaces/iProducts";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";


export const RenderProductDetail: React.FC<iProducts> = ({ name, image, description, price, product, id }) => {

    const { user } = useAuth()

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

        <div>

            {user ? (
                <div key={id} className="flex items-center justify-center w-full max-w-[2000px] mx-auto p-4 sm:p-6 lg:p-8 min-h-[50vh] sm:min-h-[60vh] lg:min-h-[80vh]">
                    <div className="w-full  mx-auto p-4 sm:p-6 lg:p-8 flex justify-center">
                        <img src={image} className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                    <div className="flex items-start flex-col gap-3 p-4" >
                        <h3 className="font-bold" >{name}</h3>
                        <h3 className="text-gray-500">{product}</h3>
                        <h3 >{description}</h3>
                        <h3 className="font-bold">${price}</h3>
                        <button className="bg-black text-white px-4 py-2 w-auto text-center" onClick={onClick}>
                            ADD CART
                        </button>
                    </div>
                </div>) : (<div key={id} className="flex items-center justify-center w-full max-w-[2000px] mx-auto p-4 sm:p-6 lg:p-8 min-h-[50vh] sm:min-h-[60vh] lg:min-h-[80vh]">
                    <div className="w-full  mx-auto p-4 sm:p-6 lg:p-8 flex justify-center">
                        <img src={image} className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                    <div className="flex items-start flex-col gap-3 p-4" >
                        <h3 className="font-bold" >{name}</h3>
                        <h3 className="text-gray-500">{product}</h3>
                        <h3 >{description}</h3>
                        <h3 className="font-bold">${price}</h3>
                        </div>
                        </div>)}



        </div>

    )



}


export default RenderProductDetail;