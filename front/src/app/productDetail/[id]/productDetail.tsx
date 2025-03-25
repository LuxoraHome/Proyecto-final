import React from "react";
import ViewDetail from "@/views/ViewDetail";




const ProductDetail: React.FC<{params : {id : string}}> = async({ params}) => {

  console.log('estos son mis params finales',params);
  
  return (
    <div>
      <ViewDetail params={params} />
    </div>
  );
};

export default ProductDetail;
