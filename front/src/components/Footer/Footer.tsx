"use client";
import { FaInstagram, FaFacebook, FaPinterest, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-black border-t border-gray-300 relative">
      <div className="bg-white text-gray-500 text-sm py-2 flex justify-end px-4 border-t">
        <button onClick={backToTop} className="hover:text-black">↑ Back to top</button>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <p className="font-semibold text-center md:text-left">
              Receive by email the latest news and offers from LUXORA
            </p>
            <div className="flex flex-col md:flex-row mt-2 gap-2">
              
              <input
                type="email"
                placeholder="your email address (name@domain.com)"
                className="border p-2 w-full max-w-md"
              />
              <button className="bg-black text-white px-4 py-2 w-full md:w-auto">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center md:text-left">
              By entering your email in the box above, you agree to receive marketing emails from us and agree to your data being processed in accordance with our
              <span className="underline hover:text-black cursor-pointer"> Terms of Use</span> and
              <span className="underline hover:text-black cursor-pointer"> Privacy Policy</span>.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">INVESTORS</h4>
            <ul className="text-sm text-gray-600 mt-2">
              <li><span className="hover:text-black cursor-pointer">ACCESS DEDICATED SPACE</span></li>
            </ul>
            <h4 className="font-semibold mt-4">CORPORATE</h4>
            <ul className="text-sm text-gray-600 mt-2">
              <li><span className="hover:text-black cursor-pointer">CAREERS</span></li>
              <li><span className="hover:text-black cursor-pointer">TRADE & CONTRACT</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">SERVICES</h4>
            <ul className="text-sm text-gray-600 mt-2">
              <li><span className="hover:text-black cursor-pointer">DESIGN SERVICES</span></li>
              <li><span className="hover:text-black cursor-pointer">QUICKSHIP PROGRAM</span></li>
              <li><span className="hover:text-black cursor-pointer">CATALOGUES</span></li>
              <li><span className="hover:text-black cursor-pointer">DELIVERY</span></li>
              <li><span className="hover:text-black cursor-pointer">WARRANTY</span></li>
              <li><span className="hover:text-black cursor-pointer">MAINTENANCE GUIDE</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-4 gap-4">
          <div className="flex flex-col md:flex-row items-center space-x-4">
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
          <button className="border px-4 py-2 w-full md:w-auto">FIND A SHOWROOM LUXORA</button>
        </div>
      </div>

      <div className="bg-black text-white text-sm py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4 space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
            <span className="hover:text-gray-400 cursor-pointer">CONTACT</span>
            <span className="hover:text-gray-400 cursor-pointer">ALL STORES</span>
            <span className="hover:text-gray-400 cursor-pointer">PRIVACY AND DATA PROTECTION POLICY</span>
            <span className="hover:text-gray-400 cursor-pointer">LEGAL NOTICES</span>
            <span className="hover:text-gray-400 cursor-pointer">CATALOGUES</span>
          </div>
          <div className="text-center">
            <button className="border px-3 py-1">USA</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
