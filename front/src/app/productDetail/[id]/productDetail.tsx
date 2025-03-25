import React from "react";
import ViewDetail from "@/views/ViewDetail";

interface ProductDetailProps {
  data: { name: string; image: string; price: number; product: string; description: string; id: string };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ data }) => {
  return (
    <div>
      <ViewDetail data={data} />
    </div>
  );
};

export default ProductDetail; 
