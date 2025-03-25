
import React from "react";
import ProductDetailId from "@/components/productDetail/ProductDetailId";


export const ViewDetail :React.FC <{params : {id : string}}>= async({params})=>{

return(

<div>
<ProductDetailId params={params}/>
</div>


)


}


export default ViewDetail ;