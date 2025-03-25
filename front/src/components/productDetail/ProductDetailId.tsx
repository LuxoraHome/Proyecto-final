import React from "react";
import RenderProductDetail from "./RenderProductDetail";

interface ProductDetailProps {
  data: { name: string; image: string; price: number; product: string; description: string; id: string };
}

const ProductsDetailId: React.FC<ProductDetailProps> = ({ data }) => {
  if (!data) {
    return <div>Product not found</div>;
  }

  return <RenderProductDetail {...data} />;
};

export default ProductsDetailId;
