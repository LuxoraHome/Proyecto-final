

import React from "react";
import { PiShoppingBag } from "react-icons/pi";
import Link from "next/link";



export const Navbar: React.FC = async () => {


  return (

    <nav>

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

    </nav>
  );
};

export default Navbar;
