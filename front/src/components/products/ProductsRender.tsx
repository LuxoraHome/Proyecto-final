import products from "@/helpers/products";
import { iRenderProps } from "@/interfaces/iProps";
import React from "react";



export const ProductRender: React.FC<iRenderProps> = ({ products }) => {

    const { name, image, price, id, description } = products;


    return (<div key={id}>
        <img src={image} />
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>{price}</h3>

        <div>
            <button>
                Details
            </button>
        </div>
    </div>)

}


export default ProductRender;