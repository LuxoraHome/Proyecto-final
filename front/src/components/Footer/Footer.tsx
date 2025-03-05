"use client";

import { FaInstagram, FaFacebook, FaPinterest, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { FooterEmailSubscription } from "../footerEmailSupscription/footerEmailSupscription";

export const Footer = () => {

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-black border-t border-gray-300 relative mt-20">
      <div className="bg-white text-gray-500 text-sm py-2 flex justify-end px-4 border-t">
        <button onClick={backToTop} className="hover:text-black">↑ Back to top</button>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg text-center">
            <p className="font-semibold">
              Receive by email the latest news and offers from LUXORA
            </p>


            <FooterEmailSubscription />

            <p className="text-sm text-gray-600 mt-4">
              By entering your email in the box above, you agree to receive marketing emails from us and agree to your data being processed in accordance with our
              <span className="underline hover:text-black cursor-pointer"> Terms of Use</span> and
              <span className="underline hover:text-black cursor-pointer"> Privacy Policy</span>.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 border-t pt-4 gap-4">
          <p className="font-semibold">Follow us on:</p>
          <div className="flex space-x-3">
            <FaInstagram className="text-xl" />
            <FaFacebook className="text-xl" />
            <FaPinterest className="text-xl" />
            <FaYoutube className="text-xl" />
            <FaLinkedin className="text-xl" />
            <FaTiktok className="text-xl" />
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-sm py-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center px-4 space-y-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <Link href="/contact">  <span className="hover:text-gray-400 cursor-pointer">CONTACT</span> </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
