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

export const Navbar: React.FC = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica si hay un usuario autenticado en Firebase o una sesión local
    const localUid = Cookies.get("access_uid");
    setIsLoggedIn(!!user?.uid || !!localUid);
  }, [user]);

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


  return (
    <nav className="bg-white flex items-center justify-between px-6 py-4 border-b border-black">
      <div className="flex flex-col items-start">
        <Link href="/">
          <h1 className="text-4xl font-semibold font-mono tracking-wide">LUXORA</h1>
        </Link>
        <h3 className="text-gray-600 text-xl self-end mt-1">Paris</h3>
      </div>

      <div className="flex items-center justify-center flex-grow mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-80 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {isLoggedIn ? (
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
