import React from "react";
import ProductRender from "./ProductsRender";

import { iProducts } from "@/interfaces/iProducts";
import { getProducts } from "@/helpers/getProducts";
import {} from "@/app/category/[categoryId]/page"
import Filter from "../filter/Filter";


export const ProductMap: React.FC = async () => {

    const data: iProducts[] = await getProducts()

    return (

        <div className="flex flex-wrap justify-center gap-16  h-full">
            
            <Filter  />
        </div>
    )



}

export default ProductMap;