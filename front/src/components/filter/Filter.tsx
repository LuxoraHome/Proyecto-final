"use client";

import { ICategories } from "@/interfaces/ICategories";
import { iProducts } from "@/interfaces/iProducts";

import { useState } from "react";

interface FilterProps {
  categories: ICategories[];
  products: iProducts[]
}

const Filter: React.FC = ({ categories, products  }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [productfilter, setProductfilter] = useState<iProducts[]>([])
    
  

  
  return (
      <div className="flex flex-wrap justify-center gap-4 mb-4">
      {categories.map((category) => (
          <button
          key={category.id}
          className={`px-4 py-2 border rounded-lg ${selectedCategory === category.id ? "bg-gray-800 text-white" : "bg-gray-200"
             }`}
              onClick={() => setSelectedCategory(category.id)}
              >
          {category.name}
        </button>
      ))}
    </div>
  );
}


export default Filter;