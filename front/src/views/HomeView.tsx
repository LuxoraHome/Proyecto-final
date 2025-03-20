import React from "react";
import ProductMap from "@/components/products/ProductsMap";
import GetOffersView from "./GetOffersView";


const HomeView: React.FC = () => {


    return (
        <div>
            <ProductMap />
            <GetOffersView />

        </div>
    )


}

export default HomeView;