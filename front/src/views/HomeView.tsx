import React from "react";
import ProductMap from "@/components/products/ProductsMap";
import GetOffersView from "./GetOffersView";


const HomeView: React.FC = () => {


    return (
        <div>
            <GetOffersView />
            <ProductMap />

        </div>
    )


}

export default HomeView;