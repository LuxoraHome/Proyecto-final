import React from "react";
import ProductDetailId from "@/components/productDetail/ProductDetailId";
import { ProductDetailProps } from "@/components/productDetail/ProductDetailId";


const ViewDetail: React.FC<ProductDetailProps> = ({data}) => {
  
  return (
    <div>
      <ProductDetailId data={data} />
    </div>
  );
};

export default ViewDetail;
