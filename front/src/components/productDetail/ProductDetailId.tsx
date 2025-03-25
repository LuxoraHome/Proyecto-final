

import React from "react";
import RenderProductDetail from "./RenderProductDetail";
import { iProducts } from "@/interfaces/iProducts";





const ProductsDetailId: React.FC<{ productData : iProducts}> = ({ productData }) => {
  const { name, image, price, product, description, id } = productData;

  return (
    <div>
      <RenderProductDetail
        name={name}
        image={image}
        price={price}
        product={product}
        description={description}
        id={id}
      />
    </div>
  );
};

export default ProductsDetailId;
