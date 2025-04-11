import React, { useState, useMemo, useEffect } from "react";
import ProductView from "./ProductView";
import CartWishlist from "./CartWishlist";
import UserHome from "./UserHome";
import Foot from "./Foot";

const initialProducts = [
  {
    id: "necklace-1",
    image: "https://www.pngall.com/wp-content/uploads/8/Gold-Jewellery-Necklace-PNG-Free-Download.png",
    title: "Classic Gold Necklace",
    price: 79000,
  },
  {
    id: "necklace-2",
    image: "https://pnghq.com/wp-content/uploads/necklace-png-transparent-elements.png",
    title: "Royal Pearl Necklace",
    price: 75000,
  },
  {
    id: "necklace-3",
    image: "https://clipart-library.com/image_gallery2/Jewellery-PNG-Picture.png",
    title: "Antique Heritage Necklace",
    price: 80000,
  },
  {
    id: "necklace-4",
    image: "https://i.pinimg.com/originals/e0/43/3a/e0433ac5b79a2642067641e75f510a9b.png",
    title: "Temple Style Necklace",
    price: 85000,
  },
  {
    id: "necklace-5",
    image: "http://www.pngmart.com/files/1/Jewellery-Necklace-Transparent-PNG.png",
    title: "Simple Designer Necklace",
    price: 21999,
  },
  {
    id: "necklace-6",
    image: "https://www.pngmart.com/files/22/Jewelry-PNG-Isolated-HD.png",
    title: "Platinum Fashion Necklace",
    price: 15999,
  },
  {
    id: "necklace-7",
    image: "https://purepng.com/public/uploads/large/love-pendant-ych.png",
    title: "Heart Pendant Necklace",
    price: 69155,
  },
  {
    id: "necklace-8",
    image: "https://www.pngall.com/wp-content/uploads/8/Gold-Necklace-PNG-Picture.png",
    title: "Modern Gold Necklace",
    price: 98000,
  },
  {
    id: "necklace-9",
    image: "https://www.pngarts.com/files/3/Necklace-Jewellery-Set-PNG-Image.png",
    title: "Jewellery Set",
    price: 28999,
  },
  {
    id: "necklace-10",
    image: "https://www.pngarts.com/files/3/Jewellery-PNG-Picture.png",
    title: "Stylish Set Necklace",
    price: 19999,
  },
];

function Necklace() {
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

export default Necklace;
