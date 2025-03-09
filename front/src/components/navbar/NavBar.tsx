"use client";
import React, { useEffect, useState } from "react";
import { PiShoppingBag } from "react-icons/pi";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { iProducts } from "@/interfaces/iProducts";
import { getProducts, searchProduct } from "@/helpers/getProducts";




export const Navbar: React.FC = () => {

  const router = useRouter()
  const { user, setUser } = useAuth()

  const uid = user?.uid

  const handelLogOut = () => {
    setUser(null)
    Cookies.remove("access_uid")
    alert("logOut")
    router.push("/")
  }

  
    const [query, setQuery] = useState<string>("")
    const [products, setProducts] = useState<iProducts[]>([])
    const [filteredProducts, setFilteredProducts] = useState<iProducts[]>([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
      const fetchProducts = async () => {

        const data = await getProducts()
        setProducts(data)
        setFilteredProducts(data)
      }

      fetchProducts()
    },[])
    useEffect(() => {
      if(query) {
        setFilteredProducts(searchProduct(query,products))
      } else if(showAll) {
        setFilteredProducts(products)
      } else {
        setFilteredProducts([])
      }
    },[query,products, showAll])
  return (
    <nav className="bg-white flex items-center justify-between px-6 py-4 border-b border-black">
      <div className="flex flex-col items-start">
        <Link href="/">
          <h1 className="text-4xl font-semibold font-mono tracking-wide">
            LUXORA
          </h1>
        </Link>
        <h3 className="text-gray-600 text-xl self-end mt-1">Paris</h3>
      </div>

      <div className="w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="absolute mt-2 bg-white z-50 rounded-lg ">
          {filteredProducts.map((products) => (
            <Link key={products.id} href={`/productDetail/${products.id}`}>
            <li key={products.id} className="hover:bg-gray-200 cursor-pointer overflow-y-auto z-50 grid grid-cols-">
              {products.name}
              <img src={products.image} 
              alt=""
              height="100px"
              width="100px" />
              
            </li>
              </Link>
          ))}
        </ul>
      </div>

      {uid ? (<div className="flex items-center space-x-6 text-2xl text-gray-800">
        <Link href="/cart">
          <PiShoppingBag />
        </Link>
        <Link href="/">
          <FaRegUserCircle />
        </Link>

        <button onClick={handelLogOut} >
          <IoLogOutOutline />
        </button>

      </div>) : (
        <div className="flex items-center space-x-6 text-2xl text-gray-800">

          <Link href="/register">
            <FaRegUser />
          </Link>
        </div>
      )}



    </nav>
  );
};
export default Navbar;