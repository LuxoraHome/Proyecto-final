import React from "react";

import { iParams } from "@/interfaces/iParams";
import { getProductsId } from "@/helpers/getProducts";
import { iProducts } from "@/interfaces/iProducts";


export const ProductDetailId: React.FC<iParams> = ({ params }) => {

    const id = Number(params.id)

    const data = getProductsId(id)


    if (!data) {
        return <p>"Product not found</p>
    }

    const { name, price, description, image } = data

    return (
        <div key={id} className="flex items-center content-center mt-3" >
            <img src={image} />

            <div className="flex flex-col gap-4 mr-24 mt-24">
                <h3 className="font-bold text-xl">{name}</h3>
                <p>{description}</p>
                <h3 className="font-bold text-xl">${price}</h3>
                <button className="inline-block w-auto text-center min-w-[100px] px-4 py-3 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px mt-3">
                    ADD CART
                </button>
            </div>
        </div>



    )




}

export default ProductDetailId;