import ProductRender from '@/components/products/ProductsRender'
import { getProductsbyCategories } from '@/helpers/categories'
import React from 'react'

const page = async ({
    params, 
}: {
    params: Promise<{categoryId: string}>}) => {
    const category = params.categoryId
    const products =await getProductsbyCategories(category)
  return (
    <div className="flex flex-wrap justify-center gap-16 h-full">
            {products?.map((product) => (
                <ProductRender key={product.id} products={product} />
            ))}
        </div>
  )
}

export default page