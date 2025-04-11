import React, { useState, useMemo } from "react";
import ProductView from "./ProductView"; // Make sure this is the correct path
import CartWishlist from "./CartWishlist"; // Make sure this is the correct path
import UserHome from "./UserHome"
import Foot from "./Foot";
const initialProducts = [
  {
    id: "bangle-1",
    image:
      "https://png.pngtree.com/png-vector/20240627/ourmid/pngtree-exquisite-gold-bangles-for-a-perfect-wedding-look-png-image_12891744.png",
    price: 45500,
  },
  {
    id: "bangle-2",
    image:
      "https://admin.pngadgil1832.com/UploadedFiles/ProductImages/KGNSET27_2GPNG_02.png",
    price: 59500,
  },
  {
    id: "bangle-3",
    image:
      "https://admin.pngadgil1832.com/UploadedFiles/ProductImages/KGNSET27_2GPNG_01.png",
    price: 59500,
  },
  {
    id: "bangle-4",
    image:
      "https://static.vecteezy.com/system/resources/previews/045/092/598/non_2x/choose-the-perfect-bangles-for-any-occasion-free-png.png",
    price: 60900,
  },
  {
    id: "bangle-5",
    image:
      "https://static.vecteezy.com/system/resources/previews/045/092/598/non_2x/choose-the-perfect-bangles-for-any-occasion-free-png.png",
    price: 95500,
  },
  {
    id: "bangle-6",
    image:
      "https://i.pinimg.com/originals/5e/99/7b/5e997be7900473465238ac9c4cae0b6c.png",
    price: 69500,
  },
  {
    id: "bangle-7",
    image: "https://cdn0.rubylane.com/shops/mur-sadies/MS006789.1L.jpg",
    price: 39500,
  },
  {
    id: "bangle-8",
    image:
      "https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-beautiful-rajwari-kadda-bangles-clipart-png-image_12510842.png",
    price: 80900,
  },
  {
    id: "bangle-9",
    image:
      "https://png.pngtree.com/png-clipart/20230701/ourmid/pngtree-indian-traditional-female-jewelry-bangles-png-image_7370186.png",
    price: 99999,
  },
  {
    id: "bangle-10",
    image:
      "https://static.vecteezy.com/system/resources/previews/045/092/645/non_2x/exploring-the-world-of-bangles-free-png.png",
    price: 12999,
  },
];


function Bangles({ name, email }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortType, setSortType] = useState(null);
  const [activePanel, setActivePanel] = useState();

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
    <UserHome name={name} email={email}/>
  </div>

    <div className="min-h-screen py-5">
      <h1 className="text-3xl text-center text-amber-800">Hand Picked for You</h1>
      <hr className="opacity-25 mb-5" />

      {/* Sort Buttons */}
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

      {/* Product Grid */}
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

export default Bangles;