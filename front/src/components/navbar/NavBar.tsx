"use client";
import React from "react";
import { PiShoppingBag } from "react-icons/pi";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";



export const Navbar: React.FC = () => {

  const router = useRouter()
  const { user , setUser } = useAuth()



  const handelLogOut = () => {
    setUser(null)
    Cookies.remove("access_token")
    alert("logOut")
    router.push("/")
  }
    


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

      <div className="flex items-center justify-center flex-grow mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {user ? (<div className="flex items-center space-x-6 text-2xl text-gray-800">
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