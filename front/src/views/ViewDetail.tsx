import { iParams } from "@/interfaces/iParams";
import React from "react";
import ProductDetailId from "@/components/productDetail/ProductDetailId";


export const ViewDetail :React.FC <iParams>= ({params})=>{

return(

<div>
<ProductDetailId params={params}/>
</div>


)


}


export default ViewDetail ;