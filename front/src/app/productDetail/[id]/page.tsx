import { getProductsId } from "@/helpers/getProducts";
import ProductsDetailId from "@/components/productDetail/ProductDetailId";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {

  
  const data = await getProductsId(params.id);
  console.log("este ", data);

  console.log("este id recibo en params", params.id);

  if (!data) {
    return <div>Product not found</div>;
  }

  return <ProductsDetailId productData={data} />;
}