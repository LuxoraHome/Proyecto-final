import ProductRender from '@/components/products/ProductsRender'
import { getProductsbyCategories } from '@/helpers/categories'
import React from 'react'

const category = async ({
    params, 
}: {
    params: Promise<{categoryId: string}>}) => {
    const category = (await params).categoryId
    const products =await getProductsbyCategories(category)

    console.log("products", products);
    
  return (
    <div className="flex flex-wrap justify-center gap-16 h-full">
        hola
            {products?.map((product) => (
                <ProductRender key={product.id} products={product} />
            ))}
        </div>
  )
}

export default category