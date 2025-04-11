// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import IntroPage from "./pages/Intropage";
import UserRegister from "./pages/UserRegister";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import AdminHome from "./AdminPages/AdminHome";
import AdminNav from "./AdminPages/AdminNav";
import UserHome from "./UserPages/UserHome";
import Slider from "./UserPages/Slider";
import Catogery from "./UserPages/Catogery";
import Catalog from "./UserPages/Catalog";
import Foot from "./UserPages/Foot";
import Offers from "./UserPages/Offers";
import Merge from "./Merge";
import Ring from "./UserPages/Ring";
import Necklace from "./UserPages/Necklace";
import Bangles from "./UserPages/Bangles";
import Earrings from "./UserPages/Earrings";
import DetailView from "./UserPages/DetailView";
import LoginIntro from "./pages/LoginIntro";
import Payment from "./UserPages/Payment";
// import VisualSearch from "./UserPages/VisualSearch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/Merge" element={<Merge />} />
      <Route path="/AdminRegister" element={<AdminRegister />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/AdminHome" element={<AdminHome />} />
      <Route path="/AdminNav" element={<AdminNav />} />
      <Route path="/UserRegister" element={<UserRegister />} />
      <Route path="/UserLogin" element={<UserLogin />} />
      <Route path="/UserHome" element={<UserHome />} />
      <Route path="/Slider" element={<Slider />} />
      <Route path="/Catogery" element={<Catogery />} />
      <Route path="/Catalog" element={<Catalog />} />
      <Route path="/Offers" element={<Offers />} />
      <Route path="/Foot" element={<Foot />} />
      <Route path="/DetailView" element={<DetailView />} />
      <Route path="/Ring" element={<Ring />} />
      <Route path="/Necklace" element={<Necklace />} />
      <Route path="/Earrings" element={<Earrings />} />
      <Route path="/Bangles" element={<Bangles />} />
      <Route path="/LoginIntro" element={<LoginIntro />} />
      <Route path="/Payment" element={<Payment />}/>
      {/* <Route path="/VisualSearch" element={<VisualSearch />}/> */}
    </Routes>
  );
}

export default App;
