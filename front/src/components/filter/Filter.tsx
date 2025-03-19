"use client";

import { getCategories } from "@/helpers/categories";
import { ICategories, IFilter } from "@/interfaces/ICategories";
import { iProducts } from "@/interfaces/iProducts";

import { useEffect, useState } from "react";
import ProductRender from "../products/ProductsRender";

interface FilterProps {
  products: iProducts[];
}

const Filter: React.FC<FilterProps> = ({ products }) => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [filter, setFilter] = useState<IFilter[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);
  const [productfilter, setProductfilter] = useState<iProducts[]>(products);

  useEffect(() => {
    const data = async () => {
      const categoryFetch = await getCategories();
      setCategories(categoryFetch);
    };

    data();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setProductfilter(
        products.filter((product) => product.category.id === selectedCategory)
      );
    } else {
      setProductfilter(products);
    }
  }, [selectedCategory, products]);

  useEffect(() => {
    setProductfilter(products);
  }, [products]);

  useEffect(() => {
    multifilter();
  }, [selectedCategory, products]);

  const multifilter = () => {
    if (selectedCategory.length > 0) {
      const filtered = products.filter((product) =>
        selectedCategory.includes(product.category.id)
      );
      setProductfilter(filtered);
    } else {
      setProductfilter(products);
    }
  };
  
  const handleClick = (categoryId: number) => {
    setSelectedCategory((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  return (
    <div className="flex flex-wrap justify-center gap-16  h-full">
      <div className="flex flex-col-2">
        <div className="grid grid-rows-1 justify-center gap-4 mb-4">
          <button
            className={`px-4 py-2 border rounded-lg ${
              selectedCategory.length === 0
                ? "bg-gray-800 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory([])}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 border rounded-lg ${
                selectedCategory.includes(category.id)
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleClick(category.id)}
            >
              {category.name}
            </button>
          ))}
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
