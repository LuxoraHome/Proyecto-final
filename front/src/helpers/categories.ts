import { iProducts } from "@/interfaces/iProducts";
import { getProducts } from "./getProducts";
import { ICategories } from "@/interfaces/ICategories";

const APIURL=process.env.NEXT_PUBLIC_API_URL

export const getCategories = async (): Promise<{ id: string; name: string, type: string, color: string }[]> => {
    try {
      const response = await fetch(`${APIURL}/categories/filter`);
      if (!response.ok) {
        throw new Error("Error loading the categories");
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to load categories:", error);
      return [];
    }
  };

export async function getProductsbyCategories (category: string) {
  try {
    const products : iProducts[] = await getProducts()
    console.log("all products", products);
    const categories: ICategories[] = await getCategories()
    console.log("categorias", categories);
    
    const selectedCategory = categories.find((cat) => cat.name === category || cat.id === category);
    if (!selectedCategory) {
      console.warn("⚠️ Categoría no encontrada:", category);
      return [];
    }

    const filtered = products.filter((product) => {

      return String(product.category?.type) === String(category);
    });
  

  return filtered
  } catch (error: unknown) {
    throw new Error(String(error))
  }
  
}