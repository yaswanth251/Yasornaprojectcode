import React from "react";
import { useNavigate } from "react-router-dom";


const navigationMap = {
  "Fashion Necklace": "/Necklace",
  "Cuff Bangles": "/Bangles",
  "Gold Ring": "/Ring",
  "Rope Necklace": "/Earrings",
  "Jhumkas": "/Earrings",
  "Necklace Set": "/Necklace",
  "Diamond Jewellery": "/Ring",
  "Bangles": "/Bangles",
  "Earring": "/Earrings",
  "Long Necklace": "/Necklace",
  "Elegant Earrings":"/Earrings",
  "Royal Necklace":"/Necklace",
  "Classic Bangles": "/Bangles",
  "Luxury Ring":"/Ring",
};

const categorie = [
  {
    name: "Fashion Necklace",
    image: "https://www.pngmart.com/files/16/Necklace-Jewellery-PNG-Clipart.png",
  },
  {
    name: "Cuff Bangles",
    image: "https://i5.walmartimages.com/asr/530cf535-d886-4515-8877-69f7a552363b_1.8eab48fff0c381ee7e3ddd37c480b209.jpeg",
  },
  {
    name: "Gold Ring",
    image: "https://pngimg.com/uploads/jewelry/jewelry_PNG6767.png",
  },
  {
    name: "Earring",
    image: "https://pnghq.com/wp-content/uploads/earring-png-image-png-high-resolution.png",
  },
  {
    name: "Jhumkas",
    image: "https://www.pngmart.com/files/23/Earring-PNG-Picture.png",
  },
  {
    name: "Necklace Set",
    image: "https://www.pngarts.com/files/3/Necklace-Jewellery-Set-PNG-Image-Transparent.png",
  },
  {
    name: "Diamond Jewellery",
    image: "https://www.pngall.com/wp-content/uploads/15/Diamond-Earring-PNG-Image-File.png",
  },
  {
    name: "Bangles",
    image: "https://www.seekpng.com/png/full/801-8015733_gold-jewellery-images-png.png",
  },
  {
    name: "Elegant Earrings",
    image: "https://admin.pngadgil1832.com/UploadedFiles/ProductImages/ER14953526PNG_01.png",
  },
  {
    name: "Royal Necklace",
    image: "https://pluspng.com/img-png/diamond-necklace-png-click-to-zoom-1000.png",
  },
  {
    name: "Classic Bangles",
    image: "https://png.pngtree.com/png-vector/20240731/ourmid/pngtree-banner-of-colorful-bangles-chudiyan-worn-by-punjabi-women-vibrant-and-png-image_13319064.png",
  },
  {
    name: "Luxury Ring",
    image: "https://pngimg.com/uploads/ring/ring_PNG149.png",
  },
];


const CategoryCard = ({ name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigationMap[name]) {
      navigate(navigationMap[name]);
    }
  };
  
  return (
    <div
      className="flex flex-col items-center bg-white rounded-2xl shadow-lg overflow-hidden h-[230px] w-full sm:w-[230px] cursor-pointer transform transition duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[180px] object-cover shadow-md p-1"
      />
      <div className="w-full bg-gradient-to-b from-transparent to-pink-100 p-3 text-center">
        <p className="text-lg font-semibold text-gray-700">{name}</p>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-2xl font-semibold text-[#76212A] mb-6">
        Embrace Bridal Collection
      </h2>

      {/* Category Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-items-center">
        {categorie.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
