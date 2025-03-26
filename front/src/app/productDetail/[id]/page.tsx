import { getProductsId } from "@/helpers/getProducts";
import ProductsDetailId from "@/components/productDetail/ProductDetailId";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;
  const data = await getProductsId(id);

  if (!data) {
    return <div>Product not found</div>;
  }

  return <ProductsDetailId productData={data} />;
}
