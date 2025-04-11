import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Mail from "../assets/Images/mail.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import images dynamically

const images = [
  {
    url: "https://i.pinimg.com/originals/65/a4/62/65a4628cd306b8425a59feae2c99d0ae.jpg",
    alt: "Bridal Jewelry Collection",
  },
  {
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/934a2b88873337.5de56582a78a5.png",
    alt: "Exclusive Necklace Set",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/1115/6326/files/B1004_Diamonds_banner_2_thumb_61466c50-3bfb-4d54-a2b3-205219e956f5.jpg?v=1511876014",
    alt: "Elegant Wedding Jewellery",
  },
  {
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4276fe171225559.646b8933ea575.jpg",
    alt: "Elegant Wedding Jewellery",
  },
  {
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/99bfd6152898429.632604445de58.jpg",
    alt: "Elegant Wedding Jewellery",
  },
];

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill out both fields.");
      return;
    }
    try {
      const response = await axios.post(
        "https://yasorna-backend-production.up.railway.app/adminlogin",
        { email, password }
      );
  
      console.log("Login response:", response.data); // Log the full response
  
      if (response.data && response.data.name) {
        const { name } = response.data;
        console.log("Login Successful:", response.data);
  
        alert("Login Successful!");
        navigate("/Merge", { state: { name, email } }); // Ensure Merge page handles these values
      } else {
        setError("Login Failed! Name not found.");
      }
    } catch (err) {
      console.error("Login Failed:", err);
      setError("Login Failed! Check your credentials.");
    }
  };
  

  return (
    <div className="relative h-screen w-screen">
      {/* Background Swiper */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header */}
      <div className="relative flex justify-between p-5">
        <div className="flex items-center">
          <img
            src={
              "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3171475/gems-clipart-md.png"
            }
            className="z-20 w-[100px] h-[100px]"
            alt="Gem"
          />
          <div className="relative z-20 text-3xl text-white p-1 ml-3">
            YasOrna
          </div>
        </div>
        <div className="z-20 text-2xl text-white flex items-center gap-3">
          <button className="hover:text-amber-400 transition">
            Contact Us
          </button>
          <img src={"https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"} className="w-10 h-10" alt="Mail Icon" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center text-center gap-5 items-center h-[70vh]">
        <div className="z-20 flex flex-col w-[400px] h-max rounded-lg shadow-lg p-5 bg-opacity-80 bg-gray-900">
          <h1 className="font-bold text-3xl text-white">User Login</h1>
          {error && <p className="text-red-600 font-bold">{error}</p>}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 items-center relative top-4"
          >
            <div className="flex gap-4">
              <div className="flex flex-col text-left items-start gap-3.5 text-[#a48b8b]">
                <label>E-mail</label>
                <label>Password</label>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="bg-orange-300 rounded p-1 text-center outline-0"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter Password"
                  className="bg-orange-300 rounded p-1 text-center outline-0"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white text-2xl border border-white px-5 py-1 rounded-lg hover:bg-orange-300 hover:text-black transition w-max"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Register Button */}
      <button
        className="absolute bottom-40 left-[50%] translate-x-[-50%] text-white text-2xl px-5 rounded-lg hover:bg-yellow-600 hover:text-black transition"
        onClick={() => navigate("/UserRegister")}
      >
        Don't have an account? Register Here.
      </button>
    </div>
  );
}

export default UserLogin;
