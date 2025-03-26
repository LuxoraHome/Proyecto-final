import { getProductsId } from "@/helpers/getProducts";
import ProductsDetailId from "@/components/productDetail/ProductDetailId";
import { iProducts } from "@/interfaces/iProducts";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { id } = params;

  // Esperar la data de la API (ya que getProductsId devuelve una promesa)
  const data: iProducts = await getProductsId(id);

  if (!data) {
    return <div>Product not found</div>;
  }

  return <ProductsDetailId productData={data} />;
}
