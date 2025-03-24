"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { iProducts } from "@/interfaces/iProducts";
import Swal from "sweetalert2";

export const RenderProductDetail: React.FC<iProducts> = ({ name, image, description, price, product, id }) => {
    const { user } = useAuth();
    const router = useRouter();

    const onClick = () => {
        const cart: iProducts[] = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push({ image, name, price, product, id });
        
        Swal.fire({
            icon: "success",
            title: "Product Added",
            text: "The product has been added to your cart."
        });

        console.log(`Products saved:`, cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        router.push("/cart");
    };

    return (
        <div>
            <div key={id} className="flex items-center justify-center w-full max-w-[2000px] mx-auto p-4 sm:p-6 lg:p-8 min-h-[50vh] sm:min-h-[60vh] lg:min-h-[80vh]">
                <div className="w-full mx-auto p-4 sm:p-6 lg:p-8 flex justify-center">
                    <img src={image} className="w-full h-auto rounded-lg shadow-lg" alt={name} />
                </div>
                <div className="flex items-start flex-col gap-3 p-4">
                    <h3 className="font-bold">{name}</h3>
                    <h3 className="text-gray-500">{product}</h3>
                    <h3>{description}</h3>
                    <h3 className="font-bold">${price}</h3>
                    {user && (
                        <button className="bg-black text-white px-4 py-2 w-auto text-center" onClick={onClick}>
                            ADD TO CART
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RenderProductDetail;