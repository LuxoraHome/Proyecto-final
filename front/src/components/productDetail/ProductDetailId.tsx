import { iParams } from "@/interfaces/iParams";
import { getProductsId } from "@/helpers/getProducts";
import React from "react";
import RenderProductDetail from "./RenderProductDetail";


export const ProductsDetailId: React.FC<{ name: string; image: string; price: number; product: string; description: string; id: string }> = ({ name, image, price, product, description, id }) => {
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


export const getServerSideProps = async ({ params }: { params: iParams['params'] }) => {
  const data = await getProductsId(params.id); 

  const { name, image, price, product, description, id } = data;

  return {
    props: {
      name,
      image,
      price,
      product,
      description,
      id,
    },
  };
};

export default ProductsDetailId;
