import React, { useState, useEffect, useMemo } from "react";
import UserHome from "./UserHome";
import Foot from "./Foot";
import ProductView from "./ProductView";
import CartWishlist from "./CartWishlist";

const initialProducts = [
  {
    id: "ring-1",
    image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6738.png",
    title: "Gold Ring",
    price: 5000,
  },
  {
    id: "ring-2",
    image: "http://pngimg.com/uploads/jewelry/jewelry_PNG6712.png",
    title: "Diamond Ring",
    price: 12000,
  },
  {
    id: "ring-3",
    image: "https://freepngimg.com/download/gold/37273-5-gold-rings-hd.png",
    title: "Ruby Ring",
    price: 7000,
  },
  {
    id: "ring-4",
    image: "http://pngimg.com/uploads/jewelry/jewelry_PNG6712.png",
    title: "Emerald Ring",
    price: 9500,
  },
  {
    id: "ring-5",
    image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6840.png",
    title: "Sapphire Ring",
    price: 11000,
  },
  {
    id: "ring-6",
    image: "https://freepngimg.com/thumb/jewellery/5-2-jewellery-free-download-png.png",
    title: "Platinum Ring",
    price: 15000,
  },
  {
    id: "ring-7",
    image: "https://pngimg.com/uploads/ring/ring_PNG29.png",
    title: "Rose Gold Ring",
    price: 8500,
  },
  {
    id: "ring-8",
    image: "https://pngimg.com/uploads/ring/ring_PNG113.png",
    title: "Silver Ring",
    price: 4000,
  },
];

function Ring() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortType, setSortType] = useState(null);
  const [activePanel, setActivePanel] = useState();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist]);

  const sortedProducts = useMemo(() => {
    if (!sortType) return initialProducts;
    return [...initialProducts].sort((a, b) =>
      sortType === "lowToHigh" ? a.price - b.price : b.price - a.price
    );
  }, [sortType]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) =>
      prevWishlist.some((item) => item.id === product.id)
        ? prevWishlist
        : [...prevWishlist, product]
    );
  };
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
  };

  const moveToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    removeFromWishlist(product.id);
  };

  const moveToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
    removeFromCart(product.id);
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <UserHome />
      </div>

      <div className="min-h-screen py-5">
        <h1 className="text-3xl text-center text-amber-800">Hand Picked for You</h1>
        <hr className="opacity-25 mb-5" />

        <div className="flex justify-end gap-4 mb-3 p-10">
          <button
            className={`px-3 py-1 rounded-md ${sortType === "lowToHigh" ? "bg-amber-500 text-white" : "bg-gray-200"}`}
            onClick={() => setSortType("lowToHigh")}
          >
            Sort: Low to High
          </button>
          <button
            className={`px-4 py-2 rounded-md ${sortType === "highToLow" ? "bg-amber-500 text-white" : "bg-gray-200"}`}
            onClick={() => setSortType("highToLow")}
          >
            Sort: High to Low
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {sortedProducts.map((product) => (
            <ProductView
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
        </div>

        <CartWishlist
          cart={cart}
          wishlist={wishlist}
          activePanel={activePanel}
          setActivePanel={setActivePanel}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
          removeFromWishlist={removeFromWishlist}
          moveToCart={moveToCart}
          moveToWishlist={moveToWishlist}
        />
      </div>

      <Foot />
    </>
  );
}

export default Ring;
