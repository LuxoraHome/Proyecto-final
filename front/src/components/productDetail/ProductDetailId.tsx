"use client"
import { iParams } from "@/interfaces/iParams";
import { getProductsId } from "@/helpers/getProducts";
import React, { useEffect, useState } from "react";
import RenderProductDetail from "./RenderProductDetail";
import { iProducts } from "@/interfaces/iProducts";




export const ProductsDetailId: React.FC<iParams> = ({ params }) => {

    const [products, setProducts] = useState<iProducts | null>(null)

    useEffect(() => {

        const getData = async () => {
            try {
                const getData = await getProductsId(params.id)
                setProducts(getData)
            } catch (error: unknown) {
                console.log("error", error);

            }
        }
        getData()
    }, [params.id])

if (!products) {
    return <div>Cant get products</div>
}


    const { name, image, price, product, description, id } = products

    return (

        <div>
            <RenderProductDetail name={name} image={image} price={price} product={product} description={description} id={id} />
        </div>

    )



}

export default ProductsDetailId;