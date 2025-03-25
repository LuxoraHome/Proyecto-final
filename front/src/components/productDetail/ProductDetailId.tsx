
"use client"

import { iParams } from "@/interfaces/iParams";
import { getProductsId } from "@/helpers/getProducts";
import React from "react";
import RenderProductDetail from "./RenderProductDetail";
import { useEffect, useState } from "react";
import { iProducts } from "@/interfaces/iProducts";



export const ProductsDetailId: React.FC<iParams> = async ({ params }) => {


  const [data, setData] = useState<iProducts | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductsId(params.id);
        if (productData) {
          setData(productData);
        } else {
          setError("Product not found");
        }
      } catch (error) {
        setError("An error occurred while fetching product details");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);
  if (!data) {
    return <div>Product not found</div>
  }
  const { name, image, price, product, description, id } = data

  return (

    <div>
      <RenderProductDetail name={name} image={image} price={price} product={product} description={description} id={id} />
    </div>

  )



}

export default ProductsDetailId;