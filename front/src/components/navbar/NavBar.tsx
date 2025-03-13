"use client";
import React, { useEffect, useState, useRef } from "react";
import { PiShoppingBag } from "react-icons/pi";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { getProducts, searchProduct } from "@/helpers/getProducts";
import { iProducts } from "@/interfaces/iProducts";
import AdminProfile from "@/views/AdminProfile";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setUser } = useAuth();

  const [query, setQuery] = useState<string>("");
  const [products, setProducts] = useState<iProducts[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<iProducts[]>([]);
  const [showAll, setShowAll] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (query) {
      setFilteredProducts(searchProduct(query, products));
    } else if (showAll) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts([]);
    }
  }, [query, products, showAll]);

  useEffect(() => {
    setQuery("");
    setFilteredProducts([]);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setFilteredProducts([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <nav className="bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-black">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4">
        <Link href="/">
          <h1 className="text-4xl font-semibold font-mono tracking-wide">LUXORA</h1>
        </Link>
        <h3 className="text-gray-600 text-xl mt-1 sm:mt-0">Paris</h3>
      </div>
  
      {/* SearchBar */}
      {user?.id && (
        <div ref={searchBarRef} className="w-full max-w-md mx-auto relative mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-80 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {filteredProducts.length > 0 && (
            <ul className="absolute mt-2 bg-transparent z-50 w-full sm:w-80 flex flex-col gap-2">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/productDetail/${product.id}`}>
                  <li className="cursor-pointer overflow-hidden z-50 flex items-center gap-4 transition-all duration-300 ease-in-out p-2 bg-white/80 shadow-md rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      height="80px"
                      width="80px"
                      className="object-cover rounded-md"
                    />
                    <span className="text-left text-black font-bold">{product.name}</span>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      )}
  
      {user?.uid ? (
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-x-6 sm:space-y-0 text-2xl text-gray-800">
          <Link href="/cart" className="flex items-center space-x-2">
            <PiShoppingBag />
            <span className="text-sm">Cart</span>
          </Link>
  
          {/* Renderizado condicional según si el usuario es administrador o no */}
          {user.admin ? (
            <div className="flex items-center space-x-4">
              <AdminProfile />
              <Link href="/adminDashboard" className="flex items-center space-x-2">
                <FaRegUserCircle />
                <span className="text-sm">Admin Panel</span>
              </Link>
            </div>
          ) : (
            <Link href="/profile" className="flex items-center space-x-2">
              <FaRegUserCircle />
              <span className="text-sm">Profile</span>
            </Link>
          )}
  
          <button onClick={handleLogOut} className="flex items-center space-x-2">
            <IoLogOutOutline />
            <span className="text-sm">Log Out</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-x-6 sm:space-y-0 text-2xl text-gray-800">
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
