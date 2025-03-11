"use client"
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

export const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setUser } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [products, setProducts] = useState<iProducts[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<iProducts[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isDropdownFocused, setIsDropdownFocused] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null); // Ref para la barra de búsqueda

  // Verificar si el usuario está logueado
  useEffect(() => {
    const localUid = Cookies.get("access_uid");
    setIsLoggedIn(!!user?.uid || !!localUid);
  }, [user]);

  // Manejar el cierre de sesión
  const handleLogOut = () => {
    setUser(null);
    Cookies.remove("access_uid");
    Swal.fire({
      icon: "success",
      title: "Log Out Successful",
      text: "You have successfully logged out.",
    });
    router.push("/");
  };

  // Obtener productos
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  // Filtrar productos según la búsqueda
  useEffect(() => {
    if (query) {
      setFilteredProducts(searchProduct(query, products));
    } else if (showAll) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts([]);
    }
  }, [query, products, showAll]);

  // Vaciar la búsqueda cuando cambia la ruta
  useEffect(() => {
    setQuery("");
    setFilteredProducts([]);
  }, [pathname]);

  // Manejar clics en productos
  const handleProductClick = () => {
    setQuery("");
    setFilteredProducts([]);
  };

  // Detectar clics fuera de la barra de búsqueda
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setFilteredProducts([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white flex items-center justify-between px-6 py-4 border-b border-black">
      {/* Logo */}
      <div className="flex flex-col items-start">
        <Link href="/">
          <h1 className="text-4xl font-semibold font-mono tracking-wide">LUXORA</h1>
        </Link>
        <h3 className="text-gray-600 text-xl self-end mt-1">Paris</h3>
      </div>

      {/* Barra de búsqueda (Solo si NO está en login o register) */}
      {!["/login", "/register"].includes(pathname) && (
        <div
          ref={searchBarRef}
          className="w-full max-w-md mx-auto relative"
          tabIndex={0}
          onFocus={() => setIsDropdownFocused(true)}
          onBlur={() => {
            if (!isDropdownFocused) {
              setFilteredProducts([]);
            }
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-80 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Dropdown de productos */}
          {filteredProducts.length > 0 && (
            <ul className="absolute mt-2 bg-transparent z-50 w-80 flex flex-col gap-2">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/productDetail/${product.id}`}
                  onClick={handleProductClick}
                >
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

      {/* Menú de usuario */}
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
