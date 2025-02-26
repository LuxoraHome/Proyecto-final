"use client"

import React, { useState } from "react";
import { PiShoppingBag } from "react-icons/pi";
import Link from "next/link";
import { searchProduct } from "@/helpers/getProducts";
import products from "@/helpers/products";

export const Navbar: React.FC = () => {
    const [search,setSearch] = useState("")

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setSearch(e.target.value)
    }

    const filteredSearch = searchProduct(search, products)


    return (
        <div>
           <nav className="bg-gray-200 shadow shadow-gray-300 px-2 md:px-auto border-b-2 border-black">
        <div className="md:h-16 h-28 sm:h-8 mx-auto md:px-2 container flex items-center justify-between flex-wrap md:">
        
          <div className="text-blue-500 md:order-1">
            {/* <!-- Heroicon - Chip Outline --> */}

           
          </div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              

              <li className="md:px-4 md:py-2 sm:px-2 sm:py-2 text-black hover:underline hover:underline-offset-4">
                <Link className="sm:p-2" href="/">Home</Link>
              </li>
              <li className="md:px-4 md:py-2 sm:px-2 sm:py-2 text-black hover:underline hover:underline-offset-4"><h3>idea: hacer un mega menu </h3></li>
              <li>
              <form className="max-w-md mx-auto">   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" value={search} onChange={handleSearch} id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
              </li>
            </ul>
          </div>
          <div className="order-3">
          
            
                    <Link href="/cart">
                    <h3>Cart</h3><PiShoppingBag className="order-2 " /></Link>
            
          </div>
          
        </div>
      </nav>
        </div>

    )


}


export default Navbar ;
