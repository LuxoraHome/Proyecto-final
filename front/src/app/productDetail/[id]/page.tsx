import { getProductsId } from "@/helpers/getProducts";
import ProductsDetailId from "@/components/productDetail/ProductDetailId";

export default async function Page({ params }: { params: { id: string } }) {

  const { id } = params;

  
  const data = await getProductsId(id);

  console.log("Producto recuperado:", data);
  console.log("ID de params recibido:", id);

  if (!data) {
    return <div>Product not found</div>;
  }

  return <ProductsDetailId productData={data} />;
}
