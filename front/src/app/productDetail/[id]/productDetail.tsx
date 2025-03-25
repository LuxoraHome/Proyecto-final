import React from "react";
import ViewDetail from "@/views/ViewDetail";
import { iParams } from "@/interfaces/iParams";



const ProductDetail: React.FC<iParams> = ({ params}) => {
  return (
    <div>
      <ViewDetail params={params} />
    </div>
  );
};

export default ProductDetail;
