
import React from "react";
import ViewDetail from "@/views/ViewDetail";


export const ProductDetail: React.FC<{ name: string; image: string; price: number; product: string; description: string; id: string }> = ({ name, image, price, product, description, id }) => {


    return (
        <div>
            <ViewDetail
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




export default ProductDetail;