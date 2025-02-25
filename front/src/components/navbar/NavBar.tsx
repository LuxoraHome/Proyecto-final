"use client"

import React from "react";
import { PiShoppingBag } from "react-icons/pi";
import Link from "next/link";

export const Navbar: React.FC = () => {


    return (
        <div>
            <nav className="flex justify-center gap-4 mt-4">
                <h3 className="font-bold">"dejo solo echo el Cart mati"</h3>
                <Link href="/cart"><PiShoppingBag className="text-2xl" /></Link>

            </nav>
        </div>

    )


}


export default Navbar ;