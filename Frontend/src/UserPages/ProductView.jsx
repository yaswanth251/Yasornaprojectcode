import { FaHeart, FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, onAddToCart, onAddToWishlist }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/DetailView", { state: { product } });
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] flex flex-col items-center group cursor-pointer">
      {/* Clickable Area */}
      <div onClick={handleCardClick} className="w-full">
        <div className="w-full h-52 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="mt-4 w-full text-center">
          <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>
          <p className="text-amber-600 text-xl font-bold mt-1">₹{product.price}/-</p>
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <button
          onClick={() => onAddToWishlist(product)}
          className="text-red-500 hover:text-red-600 transition-transform hover:scale-110"
          title="Add to Wishlist"
        >
          <FaHeart size={20} />
        </button>

        <button
          onClick={() => onAddToCart(product)}
          className="text-green-500 hover:text-green-600 transition-transform hover:scale-110"
          title="Add to Cart"
        >
          <FaShoppingCart size={20} />
        </button>
      </div>

      {/* Buy Now Button */}
      <button
        className="mt-4 px-5 py-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-medium rounded-lg shadow-md hover:from-yellow-500 hover:to-amber-500 transition-all"
        onClick={() => navigate("/Payment", { state: { product } })}
      >
        <FaCreditCard className="text-white" />
        Buy Now
      </button>
    </div>
  );
}
