
"use client"

import { useState, useEffect } from "react";
import { getProductsId } from "@/helpers/getProducts";
import RenderProductDetail from "./RenderProductDetail";

export const ProductsDetailId: React.FC<{ params: { id: string } }> = ({ params }) => {
  // Estado para almacenar los datos del producto
  const [productData, setProductData] = useState<any | null>(null);
  // Estado para manejar el cargado
  const [loading, setLoading] = useState<boolean>(true);
  // Estado para manejar los errores
  const [error, setError] = useState<string | null>(null);

  // useEffect para hacer la solicitud de los datos cuando el componente se monta
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Hacemos la llamada a la API
        const data = await getProductsId(params.id);

        if (!data) {
          setError("Product not found");
        } else {
          setProductData(data); // Si hay datos, actualizamos el estado
        }
      } catch (err) {
        setError("An error occurred while fetching the product.");
      } finally {
        setLoading(false); // Finalmente, cambiamos el estado de carga
      }
    };

    fetchProduct(); // Ejecutamos la función asincrónica
  }, [params.id]); // Este efecto solo se ejecutará cuando params.id cambie

  if (loading) return <div>Loading...</div>; // Mostramos un mensaje de carga

  if (error) return <div>{error}</div>; // Mostramos el mensaje de error

  // Si tenemos los datos, renderizamos el componente RenderProductDetail
  if (productData) {
    const { name, image, price, product, description, id } = productData;
    return (
      <div>
        <RenderProductDetail
          name={name}
          image={image}
          price={price}
          product={product}
          description={description}
          id={id}
        />
      </div>
    );
  }

  // Si no hay datos, no renderizamos nada o podemos poner un mensaje alternativo.
  return null;
};

export default ProductsDetailId;
