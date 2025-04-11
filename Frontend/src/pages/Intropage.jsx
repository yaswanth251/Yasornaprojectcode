import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import images dynamically

const images = [
  { url: "https://i.pinimg.com/originals/65/a4/62/65a4628cd306b8425a59feae2c99d0ae.jpg", alt: "Bridal Jewelry Collection" },
  { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/934a2b88873337.5de56582a78a5.png", alt: "Exclusive Necklace Set" },
  { url: "https://cdn.shopify.com/s/files/1/1115/6326/files/B1004_Diamonds_banner_2_thumb_61466c50-3bfb-4d54-a2b3-205219e956f5.jpg?v=1511876014", alt: "Elegant Wedding Jewellery" },
  { url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4276fe171225559.646b8933ea575.jpg", alt: "Elegant Wedding Jewellery" },
  { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/99bfd6152898429.632604445de58.jpg", alt: "Elegant Wedding Jewellery" },
];

function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen flex flex-col">
      {/* Background Swiper */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Header */}
      <header className="relative flex justify-between items-center p-5">
        <div className="flex items-center">
        <img src={"https://static.vecteezy.com/system/resources/previews/001/198/307/large_2x/diamond-png.png"} className="w-[80px] h-[80px]" alt="Gem Icon" />
        <div className="text-3xl text-white font-bold ml-3 tracking-wide">
            YasOrna
          </div>
        </div>
        <div className="flex items-center gap-3 text-white text-lg">
          <a href="mailto:support@gmail.com" className="hover:text-amber-400 transition">
            Contact Us
          </a>
          <img src={"https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"} className="w-8 h-8" alt="Mail Icon" />
        </div>
      </header>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center text-center h-[70vh] px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-4xl text-white font-bold">Register</h2>
          <p className="text-lg text-gray-300 mt-2">Select an option</p>

          <div className="mt-6 flex flex-col gap-4">
            {/* Admin Button */}
            <button
              className="w-full bg-amber-700 py-2 rounded-lg text-white font-semibold hover:bg-amber-600 transition"
              onClick={() => navigate("/AdminRegister")}
            >
              Admin
            </button>

            {/* User Button */}
            <button
              className="w-full bg-amber-700 py-2 rounded-lg text-white font-semibold hover:bg-amber-600 transition"
              onClick={() => navigate("/UserRegister")}
            >
              User
            </button>
          </div>
        </div>
      </div>

      {/* Already Registered? */}
      <button
        className="absolute bottom-12 left-[50%] translate-x-[-50%] text-white text-lg px-5 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg hover:bg-orange-400 hover:text-black transition"
        onClick={() => navigate("/LoginIntro")}
      >
        Already Registered? Login here
      </button>
    </div>
  );
}

export default IntroPage;
