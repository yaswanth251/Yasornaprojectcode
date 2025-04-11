import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import VisualSearch from "./VisualSearch";
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

export default function UserHome({ name, email }) {
  // const [activePanel, setActivePanel] = useState(null);

  const inputRef = useRef(null);
  const inputReff = useRef(null);

  const dropdownRef = useRef(null);
  // const dropdownReff = useRef(null);


  const [showAccount, setShowAccount] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/UserLogin");
  };
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

  const handleSearchh = (e) => {
    if (e.key === "Enter") {
      const value = inputReff.current.value.toLowerCase();

      if (value.includes("ring")) {
        navigate("/Ring");
      } else if (value.includes("necklace")) {
        navigate("/Necklace");
      } else if (value.includes("earrings")) {
        navigate("/Earrings");
      } else if (value.includes("bangle") || value.includes("bangles")) {
        navigate("/Bangles");

      }
      else if (value.includes("gold") || value.includes("Necklace")) {
        navigate("/Bangles");

      }
      else if (value.includes("silver") || value.includes("bracelet") || value.includes("brace")) {
        navigate("/Bangles");

      }

       else {
        navigate("/Merge", { state: { query: value } }); // fallback search page
      }
    }
  };




  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const value = inputRef.current.value.toLowerCase();

      if (value.includes("ring") || value.includes("engagement")) {
        navigate("/Ring");
      } else if (value.includes("necklace") || value.includes("gold")) {
        navigate("/Necklace");
      } else if (value.includes("earrings") || value.includes("earring")) {
        navigate("/Earrings");
      } else if (value.includes("bangle") || value.includes("bangles")) {
        navigate("/Bangles");
      }
      else if (value.includes("gold") || value.includes("Necklace")) {
        navigate("/Bangles");
      }
      else if (value.includes("silver") || value.includes("bracelet") || value.includes("brace")) {
        navigate("/Bangles");
      }
       else {
        navigate("/Merge", { state: { query: value } }); // fallback search page
      }
    }
  };
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
        <nav className="bg-gray-200 shadow-md px-4 py-3">
          {/* Desktop View: Logo, Search Bar, Icons in One Row */}
          <div className="hidden md:flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="text-3xl font-bold text-orange-950 flex items-center min-w-max">
              <span className="text-4xl">Y</span>asOrna
            </div>
            {/* Search Bar */}
            <div className="relative w-full max-w-2xl">
              <input
                ref={inputReff}
                type="text"
                placeholder="Search for Jewelry..."
                className="w-full px-4 py-2 pl-10 pr-10 rounded bg-gray-50 focus:outline-none shadow-sm"
                onKeyDown={handleSearchh}
              />
              <a
                href="https://yasorna-visualsearch.streamlit.app/"
                rel="noopener noreferrer"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                <BiCamera size={20} />
              </a>

              <div
                className="absolute bg-white p-[10px] z-100 rounded cursor-pointer text-gray-500 transform -translate-y-1/2 right-3 top-[50%]"
                onClick={() => inputRef.current?.focus()}
              >
                <FaSearch size={20} />
              </div>
            </div>
            {/* Icons */}
            <div className="flex items-center space-x-4 text-[#642828] min-w-max">
              {/* Account */}
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setShowAccount(!showAccount)}
              >
                <FaRegUser size={25} />
                <span className="text-[10px]">ACCOUNT</span>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-3">
            {/* Top Row: Logo and Icons */}
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="text-3xl font-bold text-orange-950 flex items-center">
                <span className="text-4xl">Y</span>asOrna
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-4 text-[#642828]">
                {/* Account */}
                <div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setShowAccount(!showAccount)}
                >
                  <FaRegUser size={22} />
                  <span className="text-[10px]">ACCOUNT</span>
                </div>

                {/* Wishlist */}

                {/* Mobile Menu Button */}
                <button
                  className="text-xl text-gray-700 ml-2"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex relative w-full">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for Jewelry..."
                className="w-full px-4 py-2 pl-10 pr-10 rounded bg-gray-50 focus:outline-none shadow-sm"
                onKeyDown={handleSearch}
              />
              <a
                href="https://yasorna-visualsearch.streamlit.app/"
                rel="noopener noreferrer"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                <BiCamera size={20} />
              </a>

              <div
                className="absolute bg-white p-[10px] z-100 rounded cursor-pointer text-gray-500 transform -translate-y-1/2 right-3 top-[50%]"
                onClick={() => inputRef.current?.focus()}
              >
                <FaSearch size={20} />
              </div>
            </div>
          </div>
        </nav>

        {/* Account Dropdown */}
        {showAccount && (
          <div
            ref={dropdownRef}
            className="absolute top-22 right-4 bg-white p-4 shadow-lg rounded-lg w-64"
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

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-gray-100 py-4 flex flex-col items-center space-y-4">
            <Link to="/Necklace" className="hover:underline">
              Necklace
            </Link>
            <Link to="/Bangles" className="hover:underline">
              Bangles
            </Link>
            <Link to="/Earrings" className="hover:underline">
              Earrings
            </Link>
            <Link to="/Ring" className="hover:underline">
              Rings
            </Link>
          </div>
        )}

        {/* Categories */}
        <div className="hidden md:flex h-10 justify-center gap-10 items-center text-lg bg-gray-100">
          <Link to="/Necklace" className="hover:underline">
            Necklace
          </Link>
          <Link
            to={`/Necklace?name=${name}&email=${email}`}
            className="hover:underline"
          >
            Bangles
          </Link>
          <Link to="/Earrings" className="hover:underline">
            Earrings
          </Link>
          <Link to="/Ring" className="hover:underline">
            Rings
          </Link>
        </div>
      </div>

      {/* Main Sections */}
    </>
  );
}
