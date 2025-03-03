"use client";

import React, { useState, useEffect } from "react";
import { PiShoppingBag } from "react-icons/pi";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { searchProduct } from "@/helpers/getProducts";
import Link from "next/link";
import { iProducts } from "@/interfaces/iProducts";

export const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<iProducts[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await searchProduct(searchQuery);
      setFilteredProducts(result);
    };

    fetchProducts();
  }, [searchQuery]);

  return (
    <nav className="bg-white flex items-center justify-between px-6 py-4 border-b border-black">
      <div className="flex flex-col items-start">
        <Link href="/">
          <h1 className="text-4xl font-semibold font-mono tracking-wide">LUXORA</h1>
        </Link>
        <h3 className="text-gray-600 text-xl self-end mt-1">Paris</h3>
      </div>

      <div className="flex items-center justify-center flex-grow mx-4 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        {/* Mostrar resultados de búsqueda */}
        {searchQuery && (
          <ul className="absolute top-12 w-80 bg-white border border-gray-300 rounded-lg shadow-md z-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                  {product.name}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No hay resultados</li>
            )}
          </ul>
        )}
      </div>

      <div className="flex items-center space-x-6 text-2xl text-gray-800">
        <Link href="/">
          <FaRegUser />
        </Link>
        <Link href="/cart">
          <PiShoppingBag />
        </Link>
        <Link href="/">
          <FaRegUserCircle />
        </Link>
        <button>
          <IoLogOutOutline className="text-2xl text-gray-800" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
