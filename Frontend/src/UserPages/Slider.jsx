import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


const images = [
  { url: "https://i.pinimg.com/originals/05/e0/7a/05e07a75023dcd2c5356bf0fa2fe8140.jpg", alt: "Elegant Wedding Jewellery" },
  { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c61f35152898429.632607152f7c2.jpg", alt: "Exclusive Necklace Set" },
  { url: "https://cdn.shopify.com/s/files/1/1115/6326/files/B1004_Diamonds_banner_2_thumb_61466c50-3bfb-4d54-a2b3-205219e956f5.jpg?v=1511876014", alt: "Elegant Wedding Jewellery" },
  { url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b08490152898429.63260715327fb.jpg", alt: "Elegant Wedding Jewellery" },
  { url: "https://i.pinimg.com/originals/65/a4/62/65a4628cd306b8425a59feae2c99d0ae.jpg", alt: "Bridal Jewelry Collection" },
];


const Slider = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        effect="fade"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-bold drop-shadow-md">
                  {image.alt}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;