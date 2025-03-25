import React from "react";
import ViewDetail from "@/views/ViewDetail";




const ProductDetail: React.FC<{params : {id : string}}> = ({ params}) => {

  console.log('estos son mis params finales',params);
  
  return (
    <div>
      <ViewDetail params={params} />
    </div>
  );
};

export default ProductDetail;
