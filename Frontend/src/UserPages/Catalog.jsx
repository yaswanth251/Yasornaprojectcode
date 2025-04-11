import React, { useState, useMemo } from "react";
import ProductView from "./ProductView";
import CartWishlist from "./CartWishlist";

// Initial Product Data
const initialProducts = [
  {
    id: "bangles",
    title: "Bangles",
    items: [
      { id: "bangle-1", image: "https://png.pngtree.com/png-vector/20240627/ourmid/pngtree-exquisite-gold-bangles-for-a-perfect-wedding-look-png-image_12891744.png", price: 45500 },
      { id: "bangle-2", image: "https://admin.pngadgil1832.com/UploadedFiles/ProductImages/KGNSET27_2GPNG_02.png", price: 59500 },
      { id: "bangle-3", image: "https://admin.pngadgil1832.com/UploadedFiles/ProductImages/KGNSET27_2GPNG_01.png", price: 59500 },
      { id: "bangle-4", image: "https://static.vecteezy.com/system/resources/previews/045/092/598/non_2x/choose-the-perfect-bangles-for-any-occasion-free-png.png", price: 60900 },
      { id: "bangle-5", image: "https://static.vecteezy.com/system/resources/previews/045/092/598/non_2x/choose-the-perfect-bangles-for-any-occasion-free-png.png", price: 95500 },
      { id: "bangle-6", image: "https://www.pngarts.com/files/3/Gold-Jewellery-Transparent-Image-391x279.png", price: 69500 },
      { id: "bangle-7", image: "https://cdn0.rubylane.com/shops/mur-sadies/MS006789.1L.jpg", price: 39500 },
      { id: "bangle-8", image: "https://i.pinimg.com/originals/77/99/a5/7799a55963695b1cd1fa4417a224b01b.png", price: 80900 },
      { id: "bangle-9", image: "https://i.pinimg.com/originals/77/99/a5/7799a55963695b1cd1fa4417a224b01b.png", price: 99999 },
      { id: "bangle-10", image: "https://static.vecteezy.com/system/resources/previews/045/092/645/non_2x/exploring-the-world-of-bangles-free-png.png", price: 12999 },
    ],
  },
  {
    id: "necklaces",
    title: "Necklaces",
    items: [
      { id: "necklace-1", image: "https://www.pngall.com/wp-content/uploads/8/Gold-Jewellery-Necklace-PNG-Free-Download.png", price: 79000 },
      { id: "necklace-2", image: "https://pnghq.com/wp-content/uploads/necklace-png-transparent-elements.png", price: 75000 },
      { id: "necklace-3", image: "https://clipart-library.com/image_gallery2/Jewellery-PNG-Picture.png", price: 80000 },
      { id: "necklace-4", image: "https://i.pinimg.com/originals/e0/43/3a/e0433ac5b79a2642067641e75f510a9b.png", price: 85000 },
      { id: "necklace-5", image: "http://www.pngmart.com/files/1/Jewellery-Necklace-Transparent-PNG.png", price: 21999 },
      { id: "necklace-6", image: "https://www.pngmart.com/files/22/Jewelry-PNG-Isolated-HD.png", price: 15999 },
      { id: "necklace-7", image: "https://purepng.com/public/uploads/large/love-pendant-ych.png", price: 69155 },
      { id: "necklace-8", image: "https://www.pngall.com/wp-content/uploads/8/Gold-Necklace-PNG-Picture.png", price: 98000 },
      { id: "necklace-9", image: "https://www.pngarts.com/files/3/Necklace-Jewellery-Set-PNG-Image.png", price: 28999 },
      { id: "necklace-10", image: "https://www.pngarts.com/files/3/Jewellery-PNG-Picture.png", price: 19999 },
    ],
  },
];

const Catalog = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortType, setSortType] = useState(null);
  const [activePanel, setActivePanel] = useState();

  // Sorting Function using useMemo
  const sortedProducts = useMemo(() => {
    if (!sortType) return initialProducts;
    return initialProducts.map((category) => ({
      ...category,
      items: [...category.items].sort((a, b) =>
        sortType === "lowToHigh" ? a.price - b.price : b.price - a.price
      ),
    }));
  }, [sortType]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        return prevWishlist; // Prevent duplicate additions
      }
      return [...prevWishlist, product];
    });
  };

  // Handler Functions for Cart and Wishlist
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

      {/* Product Listing */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sortedProducts.map((category) =>
          category.items.map((product) => (
            <ProductView
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          ))
        )}
      </div>

      {/* Sidebar Component */}
      <div className="relative z-1000">
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
    </div>
  );
};

export default Catalog;
