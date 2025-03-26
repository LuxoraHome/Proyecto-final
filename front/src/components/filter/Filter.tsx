"use client";

import { getCategories } from "@/helpers/categories";
import { ICategories} from "@/interfaces/ICategories";
import { iProducts } from "@/interfaces/iProducts";

import { useEffect, useState } from "react";
import ProductRender from "../products/ProductsRender";

interface FilterProps {
  products: iProducts[];
}

const Filter: React.FC<FilterProps> = ({ products }) => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  
  const [selectedCategory, setSelectedCategory] = useState({
    category:"",
    color:""
  });
  const [productfilter, setProductfilter] = useState<iProducts[]>(products);
  

  useEffect(() => {
    const data = async () => {
      const categoryFetch = await getCategories();
      console.log("categorias obtenidas", categoryFetch);
      
      setCategories(categoryFetch);
    };

    data();
  }, []);

  useEffect(() => {
    let filteredProducts = products;

    
    if (selectedCategory.category) {
      filteredProducts = filteredProducts.filter((product) =>
        product.categoryId?.type === selectedCategory.category
      );
    }

    
    if (selectedCategory.color) {
      filteredProducts = filteredProducts.filter((product) =>
        product.categoryId?.color === selectedCategory.color
      );
    }

    setProductfilter(filteredProducts);
  }, [selectedCategory, products]);
  

  const handleFilterChange = (filterType: "category" | "color") => (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory((prevCategory) => ({
      ...prevCategory,
      [filterType]: e.target.value,
    }))
  }

  const uniqueCategories = Array.from(new Set(categories.map(category => category.type)));
  const uniqueColor = Array.from(new Set(categories.map(category => category.color)));

  return (
    <div className=" flex flex-col justify-center gap-16 h-full">
      <div className="flex flex-col items-center">
        <div className="gap-4 mb-4">
          <button
            className="px-4 py-2 border border-black rounded-lg font-bold text-[12px]"
            onClick={() => setSelectedCategory({category: "", color: ""})}
          >
            All
          </button>
          
          
          <select value={selectedCategory.category}
          onChange={handleFilterChange("category")}
          className="px-4 py-2 m-5 border border-black rounded-lg font-bold text-[12px]"
          >
            <option value="">All Categories</option>

          {uniqueCategories.map((categoryType) => (
            <option key={categoryType} value={categoryType}>
              {categoryType}
            </option>
          ))}
          </select>
          
          <select value={selectedCategory.color}
            onChange={handleFilterChange("color")}
            className="px-4 py-2 border border-black rounded-lg font-bold text-[12px]">
            <option value ="">All Colors</option>
          {uniqueColor.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ) )}

          </select>
          
          </div>
        

        <div className="flex flex-wrap justify-center gap-16  h-full">
          {productfilter.length > 0 ? (
            productfilter.map((product) => (
              <ProductRender key={product.id} products={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
