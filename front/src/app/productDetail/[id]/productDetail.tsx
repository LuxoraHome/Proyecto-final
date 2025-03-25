import React from "react";
import ProductsDetailId from "@/components/productDetail/ProductDetailId";




export const ProductDetail: React.FC<{params : {id : string}}> = ({ params}) => {
  
  return (
    <div>
    <ProductsDetailId params={params}/>
    </div>
  );
};

export default ProductDetail;
