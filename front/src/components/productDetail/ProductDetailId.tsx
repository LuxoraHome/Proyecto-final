

import React from "react";
import RenderProductDetail from "./RenderProductDetail";


interface ProductData {
  name: string;
  image: string;
  price: number;
  product: string;
  description: string;
  id: string;
}

const ProductsDetailId: React.FC<{ productData: ProductData }> = ({ productData }) => {
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
