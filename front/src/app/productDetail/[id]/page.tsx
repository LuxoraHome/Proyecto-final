import { useEffect, useState } from "react";
import { getProductsId } from "@/helpers/getProducts";
import ProductsDetailId from "@/components/productDetail/ProductDetailId";
import { iProducts } from "@/interfaces/iProducts";

interface PageProps {
  params: { id: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [productData, setProductData] = useState<iProducts | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsId(params.id);
      setProductData(data);
      setLoading(false);
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!productData) {
    return <div>Product not found</div>;
  }

  return <ProductsDetailId productData={productData} />;
};

export default Page;
