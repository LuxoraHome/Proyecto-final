import React from "react";
import ProductRender from "./ProductsRender";

import { iProducts } from "@/interfaces/iProducts";
import { getProducts } from "@/helpers/getProducts";



export const ProductMap: React.FC = async () => {

    const data: iProducts[] = await getProducts()

    return (
        <div className="flex flex-wrap justify-center gap-16  h-full">
            {data.map((products: iProducts) => (<ProductRender key={products.id} products={products} />))}
        </div>
    )



}

export default ProductMap;