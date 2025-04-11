import React, { useState, useMemo, useEffect } from "react";
import ProductView from "./ProductView";
import CartWishlist from "./CartWishlist";
import UserHome from "./UserHome";
import Foot from "./Foot";

const initialProducts = [
  {
    id: "earring-1",
    image: "https://www.pngall.com/wp-content/uploads/8/Earring-PNG-Download-Image.png",
    title: "Gold Earrings",
    price: 4500,
  },
  {
    id: "earring-2",
    image: "https://clipground.com/images/png-gold-earrings-1.png",
    title: "Diamond Earrings",
    price: 13000,
  },
  {
    id: "earring-3",
    image: "https://www.pngmart.com/files/23/Earring-PNG-Isolated-HD.png",
    title: "Ruby Earrings",
    price: 8000,
  },
  {
    id: "earring-4",
    image: "https://static01.srikrishna.com/DealImages/7133/ZoomImages/ear193121.png",
    title: "Emerald Earrings",
    price: 9900,
  },
  {
    id: "earring-5",
    image: "https://www.pngmart.com/files/23/Gold-Earrings-PNG-HD-Isolated.png",
    title: "Sapphire Earrings",
    price: 11500,
  },
  {
    id: "earring-6",
    image: "https://www.pngall.com/wp-content/uploads/8/Earring-PNG-File-Download-Free.png",
    title: "Platinum Earrings",
    price: 16000,
  },
  {
    id: "earring-7",
    image: "https://pnghq.com/wp-content/uploads/buy-gold-earrings-online-64053.png",
    title: "Rose Gold Earrings",
    price: 8900,
  },
  {
    id: "earring-8",
    image: "https://cdn0.rubylane.com/shops/1231960/Earr-614.1L.jpg",
    title: "Silver Earrings",
    price: 4200,
  },
];

function Earrings() {
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

export default Earrings;
