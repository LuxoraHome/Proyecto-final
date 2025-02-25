import { getProductsId } from "@/helpers/getProducts";
import { iParams } from "@/interfaces/iParams";

import React from "react";
import RenderProductDetail from "./RenderProductDetail";




export const ProductsDetailId: React.FC<iParams> = ({ params }) => {

    const id = Number(params.id)
    const data  = getProductsId(id)
    if (!data) {
        return ("Product not found")
    }
    const { image, name, product, price, description  } = data

    return (
  
        <div>
            <RenderProductDetail name={name}  image={image} price={price} product={product} description={description} id={id}/>
        </div>

)



}

export default ProductsDetailId ;