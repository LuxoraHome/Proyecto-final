import React from "react";
import ProductRender from "./ProductsRender";
import products from "@/helpers/products";
import { iProducts } from "@/interfaces/iProducts";


export const ProductMap: React.FC = () => {





    return (
        <div className="flex flex-wrap justify-center gap-16  h-full">
            {products.map((products: iProducts) => (<ProductRender key={products.id} products={products} />))}
        </div>
    )



}

export default ProductMap;