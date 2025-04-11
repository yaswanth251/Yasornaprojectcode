import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Foot() {
  return (
    <div className="h-auto bg-[#1d1919] text-white py-8 px-4 relative z-10">
      <h1 className="text-center text-3xl mb-6">Know More About YasOrna</h1>

      <div className="flex flex-wrap justify-center gap-8 md:justify-around">
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl mb-2">Quick Links</h1>
          {[
            "Customer Reviews",
            "Our Blogs",
            "Store Locator",
            "About Us",
            "Join Us",
          ].map((item, index) => (
            <span key={index} className="text-[#a69595] hover:text-white cursor-pointer">{item}</span>
          ))}
        </div>

        {/* Info */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl mb-2">Info</h1>
          {[
            "Shipping & Returns",
            "Privacy Policy",
            "International Shipping",
            "FAQs & Support",
            "Terms of Service",
            "Corporate Orders",
            "International Orders",
            "Wholesale Inquiries",
          ].map((item, index) => (
            <span key={index} className="text-[#a69595] hover:text-white cursor-pointer">{item}</span>
          ))}
        </div>

        {/* Other Resources */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl mb-2">Other Resources</h1>
          {[
            "Promotions & Offers",
            "Frequently Asked Questions",
            "Jewelry Care & Repair",
            "Style Now, Pay Later",
            "Bolt",
            "Cash App",
            "Encyclopedia",
            "Shop More Jewelry",
            "Direct Retail",
          ].map((item, index) => (
            <span key={index} className="text-[#a69595] hover:text-white cursor-pointer">{item}</span>
          ))}
        </div>
      </div>

      {/* Connect Section */}
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-lg font-semibold mb-3">CONNECT WITH US</h2>
        <div className="flex items-center bg-white rounded-lg p-3 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter Email ID"
            className="w-full bg-transparent text-black outline-none"
          />
          <IoIosArrowForward className="text-black text-xl cursor-pointer" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4 text-xl">
          <FaYoutube className="hover:text-gray-400 cursor-pointer" />
          <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
          <FaInstagram className="hover:text-gray-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
          <FaTwitter className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 text-center mt-6">© Copyright 2023 YasOrna. All rights reserved</p>
    </div>
  );
}

export default Foot;
