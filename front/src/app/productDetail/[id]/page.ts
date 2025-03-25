import { getProductsId } from "@/helpers/getProducts";
import ProductDetail from "./ProductDetail";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getProductsId(params.id);

  return <ProductDetail data={data} />
};

export default Page;
