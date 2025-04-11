import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Foot from "../UserPages/Foot";
import Catalog from "../UserPages/Catogery";
import {
  FaSearch,
  FaRegUser,
  FaShoppingCart,
  FaSignOutAlt,
  FaUser,
  FaBars,
  FaTimes,
  FaHeart,
} from "react-icons/fa";
import { BiCamera } from "react-icons/bi";
import Slider from "../UserPages/Slider";
import Catogery from "../UserPages/Catogery";
import Offers from "../UserPages/Offers";

export default function AdminNav({ name, email }) {
  const [showAccount, setShowAccount] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => navigate("/UserLogin");

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAccount(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative">
        {/* Top Banner */}
        <div className="bg-black text-white text-xs md:text-sm h-8 md:h-10 flex justify-center items-center text-center">
          SPARKLE & SAVE: 50% OFF on Stunning Jewelry! ✨💎
          <button className="ml-2 p-1 bg-yellow-500 text-black rounded-md">
            Shop
          </button>
        </div>

        {/* Navbar */}
        <nav className="relative flex items-center justify-between px-4 md:px-6 py-3 bg-gray-200 shadow-md">
          {/* Logo */}
          <div className="text-3xl font-bold text-orange-950 flex items-center">
            <span className="text-4xl">Y</span>asOrna
          </div>

          {/* Mobile Menu Button */}
          

          {/* Icons Section */}
          <div className="hidden md:flex items-center space-x-4 text-[#642828]">
            {/* Account */}
            <div
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => setShowAccount(!showAccount)}
            >
              <FaRegUser size={24} />
              <span className="text-xs hidden md:block">ACCOUNT</span>
            </div>

            {/* Cart */}
          </div>
        </nav>

        {/* Account Dropdown */}
        {showAccount && (
          <div
            ref={dropdownRef}
            className="absolute top-14 right-4 bg-white p-4 shadow-lg rounded-lg w-64"
          >
            <button
              onClick={handleLogout}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <FaSignOutAlt size={18} />
            </button>
            <div className="flex flex-col items-center">
              <FaUser
                size={40}
                className="text-gray-500 border p-2 rounded-full bg-gray-200"
              />
              <p className="mt-2 font-bold">{name || "Guest"}</p>
              <p className="text-gray-600 text-sm">
                {email || "No Email Provided"}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
