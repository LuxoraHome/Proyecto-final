"use client"

import { getProductsId } from "@/helpers/getProducts";
import React, { useEffect, useState } from "react";
import RenderProductDetail from "./RenderProductDetail";

export const ProductDetailId: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductsId(params.id);
      if (data) {
        setProduct(data);
      }
    };
    
    fetchProduct();
  }, [params.id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, image, price, product: productName, description, id } = product;

  return (
    <div>
      <RenderProductDetail
        name={name}
        image={image}
        price={price}
        product={productName}
        description={description}
        id={id}
      />
    </div>
  );
};

export default ProductDetailId;
