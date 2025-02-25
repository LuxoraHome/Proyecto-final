import { iParams } from "@/interfaces/iParams";
import React from "react";
import ViewDetail from "@/views/ViewDetail";


export const ProductDetail: React.FC<iParams> = ({ params }) => {


    return (
        <div>
            <ViewDetail params={params} />
        </div>

    )

}




export default ProductDetail;