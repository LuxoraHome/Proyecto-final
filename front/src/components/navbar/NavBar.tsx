"use client";

import React, { useState } from "react";
import { PiShoppingBag } from "react-icons/pi";
import Link from "next/link";
import { searchProduct } from "@/helpers/getProducts";
import products from "@/helpers/products";


export const Navbar: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredSearch = searchProduct(search, products);

  return (
    <div>
      <nav className="bg-gray-200 shadow shadow-gray-300 px-2 md:px-auto border-b-2 border-black">
        <div className="md:h-16 h-28 sm:h-8 mx-auto md:px-2 container flex items-center justify-between flex-wrap md:">
          <div className="flex-1 md:order-1 ">
            <ul>
              <li className="order-2">
                <form className="max-w-md mx-auto">
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <div className="relative w-64">
                      <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        id="search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search" 
                        required
                      />
                      
                      {search && filteredSearch.length > 0 && (
                        <ul className="absolute mt-2 bg-white z-50 rounded-lg ">
                          {filteredSearch.map((product) => (
                            <Link
                              href={`/productDetail/${product.id}`}
                              key={product.id}
                            >
                              <li
                                key={product.id}
                                className="hover:bg-gray-200 cursor-pointer overflow-y-auto z-50 grid grid-cols-2"
                              >
                                <div className="grid grid-rows-2 font-bold">
                                <h3 className="row-span-1">
                                {product.name}
                                </h3>
                                <h3 className="row-span-1">
                                ${product.price}
                                </h3>
                                </div>
                                <img src={product.image} alt="" 
                                height={100}
                                width={100}/>
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                      
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </div>
          

          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2 items-center">
            <ul className="flex justify-center items-center font-semibold text-center">
                <Link href="/">
                <h1>LUXORA</h1>
                </Link>
            </ul>
          </div>
          <div className=" flex-1 md:order-3 flex justify-end items-center order-3">
            <Link href="/cart">
              <h3>Cart</h3>
              <PiShoppingBag className="order-2 " />
            </Link>
          </div>

          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
