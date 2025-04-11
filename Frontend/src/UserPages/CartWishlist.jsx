import { FaShoppingCart, FaHeart, FaTimes, FaTrash } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function CartWishlist({
  cart,
  wishlist,
  activePanel,
  setActivePanel,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  removeFromWishlist,
  moveToCart,
  moveToWishlist,
}) {
  const [selectedCartItems, setSelectedCartItems] = useState([]);
  const [selectedWishlistItems, setSelectedWishlistItems] = useState([]);

  const toggleCartSelection = (id) => {
    setSelectedCartItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleWishlistSelection = (id) => {
    setSelectedWishlistItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const cartRef = useRef(null);
  const wishlistRef = useRef(null);

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (activePanel === "cart" &&
          cartRef.current &&
          !cartRef.current.contains(event.target)) ||
        (activePanel === "wishlist" &&
          wishlistRef.current &&
          !wishlistRef.current.contains(event.target))
      ) {
        setActivePanel(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePanel]);

  return (
    <>
      {/* Floating Icons */}
      <div className="fixed top-[2.5rem] left-1/2 -translate-x-1/2 sm:left-auto sm:right-[8rem] flex gap-10 z-[9999] p-3">
        <div className="relative">
          <FaShoppingCart
            className="text-2xl sm:text-3xl text-blue-600 cursor-pointer hover:scale-110 transition-transform"
            onClick={() =>
              setActivePanel(activePanel === "cart" ? null : "cart")
            }
          />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-green-600 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </div>
        <div className="relative">
          <FaHeart
            className="text-2xl sm:text-3xl text-red-500 cursor-pointer hover:scale-110 transition-transform"
            onClick={() =>
              setActivePanel(activePanel === "wishlist" ? null : "wishlist")
            }
          />
          {wishlist.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
              {wishlist.length}
            </span>
          )}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div
        ref={cartRef}
        className={`fixed top-0 right-0 h-full bg-white shadow-lg p-4 transition-transform duration-300 
        ${activePanel === "cart" ? "translate-x-0" : "translate-x-full"} 
        w-full sm:w-80 max-w-xs z-[9999]`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Cart ({cart.length})</h2>
          <FaTimes
            className="cursor-pointer text-xl"
            onClick={() => setActivePanel(null)}
          />
        </div>
        <ul className="mt-4 space-y-3 overflow-y-auto max-h-[65vh]">
          {cart.length > 0 ? (
            cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 p-2 border-b"
              >
                <input
                  type="checkbox"
                  checked={selectedCartItems.includes(item.id)}
                  onChange={() => toggleCartSelection(item.id)}
                />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 rounded"
                />
                <div className="flex-grow">
                  <p className="text-sm">{item.title}</p>
                  <p className="text-amber-600">₹{item.price}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <FaTrash
                  className="cursor-pointer text-red-500"
                  onClick={() => removeFromCart(item.id)}
                />
              </li>
            ))
          ) : (
            <p className="text-gray-500">Cart is empty.</p>
          )}
        </ul>
        {selectedCartItems.length > 0 && (
          <>
            <button
              className="mt-4 bg-blue-600 text-white w-full py-2 rounded"
              onClick={() => {
                moveToWishlist(selectedCartItems);
                setSelectedCartItems([]);
              }}
            >
              Move to Wishlist
            </button>
            <button
              className="mt-2 bg-yellow-500 text-white w-full py-2 rounded"
              onClick={() => alert("Proceeding to Buy selected items")}
            >
              Proceed to Buy ({selectedCartItems.length})
            </button>
          </>
        )}
        {cart.length > 0 && (
          <button
            className="mt-4 bg-green-600 text-white w-full py-2 rounded"
            onClick={() => alert("Proceeding to Checkout")}
          >
            Proceed to Checkout
          </button>
        )}
      </div>

      {/* Wishlist Sidebar */}
      <div
        ref={wishlistRef}
        className={`fixed top-0 right-0 h-full bg-white shadow-lg p-4 transition-transform duration-300 
        ${activePanel === "wishlist" ? "translate-x-0" : "translate-x-full"} 
        w-full sm:w-80 max-w-xs z-[9999]`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Wishlist ({wishlist.length})</h2>
          <FaTimes
            className="cursor-pointer text-xl"
            onClick={() => setActivePanel(null)}
          />
        </div>
        <ul className="mt-4 space-y-3 overflow-y-auto max-h-[65vh]">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 p-2 border-b"
              >
                <input
                  type="checkbox"
                  checked={selectedWishlistItems.includes(item.id)}
                  onChange={() => toggleWishlistSelection(item.id)}
                />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 rounded"
                />
                <div className="flex-grow">
                  <p className="text-sm">{item.title}</p>
                  <p className="text-amber-600">₹{item.price}</p>
                </div>
                <FaTrash
                  className="cursor-pointer text-red-500"
                  onClick={() => removeFromWishlist(item.id)}
                />
              </li>
            ))
          ) : (
            <p className="text-gray-500">Wishlist is empty.</p>
          )}
        </ul>
        {selectedWishlistItems.length > 0 && (
          <>
            <button
              className="mt-4 bg-blue-600 text-white w-full py-2 rounded"
              onClick={() => {
                moveToCart(selectedWishlistItems);
                setSelectedWishlistItems([]);
              }}
            >
              Move to Cart
            </button>
            <button
              className="mt-2 bg-yellow-500 text-white w-full py-2 rounded"
              onClick={() => alert("Proceeding to Buy selected items")}
            >
              Proceed to Buy ({selectedWishlistItems.length})
            </button>
          </>
        )}
      </div>
    </>
  );
}
