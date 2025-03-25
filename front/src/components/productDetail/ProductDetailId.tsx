
import { iParams } from "@/interfaces/iParams";
import { getProductsId } from "@/helpers/getProducts";
import React from "react";
import RenderProductDetail from "./RenderProductDetail";




export const ProductsDetailId: React.FC<iParams> = async ({ params }) => {


    const data = await getProductsId(params.id)

   

    const { name, image, price, product, description, id } = data

    return (

        <div>
            <RenderProductDetail name={name} image={image} price={price} product={product} description={description} id={id} />
        </div>

    )



}

export default ProductsDetailId;