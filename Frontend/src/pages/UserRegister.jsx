import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images dynamically
const images = [
  { url: "https://i.pinimg.com/originals/65/a4/62/65a4628cd306b8425a59feae2c99d0ae.jpg", alt: "Bridal Jewelry Collection" },
  { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/934a2b88873337.5de56582a78a5.png", alt: "Exclusive Necklace Set" },
  { url: "https://cdn.shopify.com/s/files/1/1115/6326/files/B1004_Diamonds_banner_2_thumb_61466c50-3bfb-4d54-a2b3-205219e956f5.jpg?v=1511876014", alt: "Elegant Wedding Jewellery" },
  { url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4276fe171225559.646b8933ea575.jpg", alt: "Elegant Wedding Jewellery" },
  { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/99bfd6152898429.632604445de58.jpg", alt: "Elegant Wedding Jewellery" },
];

function UserRegister() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");  // State for mobile field
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Basic validation
    if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {  // Mobile number validation (10 digits)
        setError("Please enter a valid 10-digit mobile number.");
        return;
    }

    try {
        // Make a request to register the user
        const response = await axios.post("https://yasorna-backend-production.up.railway.app/adminregister", {
            name,
            email,
            mobile,  // Sending mobile number to the backend
            password,
        });

        console.log("Registration Successful:", response.data);
        alert("Registration Successful!");

        // Redirect user and pass name, email, and mobile to the next page
        navigate("/Merge", { state: { name: response.data.name, email: response.data.email, mobile: response.data.mobile } });

    } catch (error) {
        console.error("Registration Failed:", error);

        if (error.response) {
            if (error.response.status === 400) {
                setError("Email already registered! Please use another email.");
            } else {
                setError(error.response.data.message || "Registration Failed. Try again.");
            }
        } else {
            setError("Network error! Please check your internet connection.");
        }
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

      {/* Dark Overlay for Visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header */}
      <div className="relative flex justify-between p-5">
        <div className="flex items-center">
          <img
            src={"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3171475/gems-clipart-md.png"}
            className="z-20 w-[100px] h-[100px] relative left-27"
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
        <div
          className=" bg-gray-600 z-20 flex flex-col w-[400px] h-max rounded-lg shadow-lg p-5"
        >
          <h1 className="font-bold text-3xl text-red-300">User SignUp</h1>

          {error && <p className="text-red-600 font-bold">{error}</p>}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 relative top-3"
          >
            <div className="flex gap-4">
              <div className="flex flex-col text-left font-bold text-white items-start gap-3.5">
                <label>Name</label>
                <label>E-mail</label>
                <label>Mobile</label> {/* Mobile Label */}
                <label>Password</label>
                <label>Re-Enter Password</label>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name"
                  className="bg-orange-300 rounded p-0.5 text-center outline-0"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="bg-orange-300 rounded p-0.5 text-center outline-0"
                />
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  placeholder="Your Mobile Number"
                  className="bg-orange-300 rounded p-0.5 text-center outline-0"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Min 6 characters"
                  className="bg-orange-300 rounded p-0.5 text-center outline-0"
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Re-enter Password"
                  className="bg-orange-300 rounded p-0.5 text-center outline-0"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white text-2xl border border-white px-5 py-2 rounded-lg hover:bg-orange-300 hover:text-black transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Already Registered Button */}
      <button
        className="absolute bottom-40 left-[50%] translate-x-[-50%] text-white text-2xl px-5 rounded-lg hover:bg-yellow-600 hover:text-black transition"
        onClick={() => navigate("/UserLogin")}
      >
        Already Registered? Login here.
      </button>
    </div>
  );
}

export default UserRegister;
