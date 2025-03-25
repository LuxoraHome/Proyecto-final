"use client"

import { useState, useEffect } from "react";
import { getProductsId } from "@/helpers/getProducts";
import RenderProductDetail from "./RenderProductDetail";

export const ProductsDetailId: React.FC<{ params: { id: string } }> = ({ params }) => {
const{id} = params

  console.log("ID recibido:", id);

  const [productData, setProductData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError("Product ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const data = await getProductsId(id);

        if (!data) {
          setError("Product not found");
        } else {
          setProductData(data);
        }
      } catch (err) {
        setError("An error occurred while fetching the product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {productData && (
        <RenderProductDetail
          name={productData.name}
          image={productData.image}
          price={productData.price}
          product={productData.product}
          description={productData.description}
          id={productData.id}
        />
      )}
    </div>
  );
};

export default ProductsDetailId;
