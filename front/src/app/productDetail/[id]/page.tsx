import ProductsDetailId from "@/components/productDetail/ProductDetailId";
export default function Page({ params }: { params: { id: string } }) {
  return <ProductsDetailId params={params} />;
}