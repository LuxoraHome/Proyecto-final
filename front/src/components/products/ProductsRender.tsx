import products from "@/helpers/products";
import { iRenderProps } from "@/interfaces/iProps";
import React from "react";



export const ProductRender: React.FC<iRenderProps> = ({ products }) => {

    const { name, image, price, id, description } = products;


    return (<div key={id} className="flex items-center content-center flex-col w-full sm:w-1/2 lg:w-1/4 gap-2 border-b border-gray-400 pb-4 ">
        <img src={image} />
        <h3 className="font-bold">{name}</h3>
        <p className="text-gray-500">{description}</p>
        <h3 className="font-bold">${price}</h3>

        <div>
            <button className="text-gray-600 font-medium">
         DETAILS
            </button>
        </div>
    </div>)

}


export default ProductRender;