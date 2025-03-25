import { getProductsId } from "@/helpers/getProducts";
import ProductsDetailId from "@/components/productDetail/ProductDetailId";

export default async function Page({ params }: { params: { id: string } }) {
 
  const data = await getProductsId(params.id);

  console.log('este id recibo en params', params.id);
  

  if (!data) {
    return <div>Product not found</div>;
  }

  return <ProductsDetailId productData={data} />;
}