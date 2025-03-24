"use client"
import { getCategories } from '@/helpers/categories';
import { ICategories } from '@/interfaces/ICategories';
import React, { useEffect, useState } from 'react'

const filter = () => {
    const [categories, setCategories] = useState<ICategories[]>([])
          const [loading, setLoading] = useState<boolean>(true);
          const [error, setError] = useState<string | null>(null);
          const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    useEffect(() => {
        let filtered = products;
      
        if (selectedCategory) {
          filtered = filtered.filter(
            (product) => product.category.id === selectedCategory
          );
        }
      
        if (query) {
          filtered = searchProduct(query, filtered);
        }
      
        if (showAll) {
          setFilteredProducts(products);
        } else {
          setFilteredProducts(filtered);
        }
      }, [query, products, showAll, selectedCategory]);
      console.log(selectedCategory);
      useEffect(() => {
        console.log(filteredProducts);
        
      },[filteredProducts])
      useEffect(() => {
        const loadCategories =async () => {
          const data = await getCategories()
          setCategories(data)
          
        }
        loadCategories()
      }, [])

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((category) => (
        <button 
        key={category.id} 
        className={`px-4 py-2 m-1 border rounded-lg ${selectedCategory === category.id ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
        onClick={() => setSelectedCategory(category.id)}
      >
        {category.name}
      </button>
      ))}
    </div>
  )
}

export default filter