"use client";
import React, { useEffect, useState } from "react";
import { PiShoppingBag } from "react-icons/pi";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { getProducts, searchProduct } from "@/helpers/getProducts";
import { iProducts } from "@/interfaces/iProducts";

export const Navbar: React.FC = () => {

  const router = useRouter()
  const { user, setUser } = useAuth()
 




  const handleLogOut = () => {
    setUser(null);
    Cookies.remove("access_uid");
    Swal.fire({
      icon: "success",
      title: "Log Out Successful",
      text: "You have successfully logged out."
    });
    router.push("/");
  };

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
        },[query,products, showAll]);


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
        <ul className="absolute mt-2 bg-white z-50 rounded-lg w-80 ">
          {filteredProducts.map((products) => (
            <Link key={products.id} href={`/productDetail/${products.id}`}>
            <li key={products.id} className="hover:bg-gray-300 cursor-pointer overflow-y-auto z-50 grid grid-cols-[auto_1fr] w-full transition-all duration-300 ease-in-out border border-gray-300">
              <img src={products.image} 
              alt=""
              height="100px"
              width="100px"
              className="object-cover" />
              
              <span className="text-left text-black font-bold">{products.name}</span> 
            </li>
              </Link>
          ))}
        </ul>
      </div>

      {user?.uid ? (
        <div className="flex items-center space-x-6 text-2xl text-gray-800">
          <Link href="/cart" className="flex items-center space-x-2">
            <PiShoppingBag />
            <span className="text-sm">Cart</span>
          </Link>
          <Link href="/profile" className="flex items-center space-x-2">
            <FaRegUserCircle />
            <span className="text-sm">Profile</span>
          </Link>
          <button onClick={handleLogOut} className="flex items-center space-x-2">
            <IoLogOutOutline />
            <span className="text-sm">Log Out</span>
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-6 text-2xl text-gray-800">
          <Link href="/register" className="flex items-center space-x-2">
            <FaRegUser />
            <span className="text-sm">Sign Up</span>
          </Link>
          <Link href="/login" className="flex items-center space-x-2">
            <FaRegUserCircle />
            <span className="text-sm">Login</span>
          </Link>
        </div>
      )}



    </nav>
  );
};
export default Navbar;