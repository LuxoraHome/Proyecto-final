
import React from "react";
import ProductDetailId from "@/components/productDetail/ProductDetailId";


export const ViewDetail: React.FC<{ name: string; image: string; price: number; product: string; description: string; id: string }> = ({ name, image, price, product, description, id }) => {

    return (

        <div>
            <ProductDetailId
                name={name}
                image={image}
                price={price}
                product={product}
                description={description}
                id={id}
            />
        </div>


    )


}


export default ViewDetail;