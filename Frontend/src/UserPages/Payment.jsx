import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Foot from "./Foot";
import UserHome from "./UserHome";

import { FaCreditCard, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import { SiGooglepay, SiPhonepe } from "react-icons/si";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity: initialQuantity } = location.state || {};
  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl">
        Product details not found. Please go back and try again.
      </div>
    );
  }

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalAmount = product.price * quantity;

  const handleConfirmPayment = () => {
    alert(
      `Payment successful!\nAmount: ₹${totalAmount}/-\nMethod: ${paymentMethod.toUpperCase()}`
    );
    navigate("/");
  };

  return (
    <>
      <UserHome />
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
            Confirm Your Order
          </h2>

          {/* Product Info */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-48 h-48 object-cover rounded-md shadow-md"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-600 mt-2">
                Price per unit: ₹{product.price}/-
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center mt-2">
                <button
                  className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b">{quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>

              <p className="text-lg font-bold mt-3 text-green-700">
                Total: ₹{totalAmount.toFixed(2)}/-
              </p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">
              Choose Payment Method:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* UPI */}
              <label className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition
                  ${paymentMethod === "upi" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="hidden"
                />
                <SiGooglepay className="text-2xl text-blue-700" />
                <span className="font-medium text-gray-700">UPI (Google Pay / PhonePe)</span>
              </label>

              {/* Card */}
              <label className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition
                  ${paymentMethod === "card" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="hidden"
                />
                <FaCreditCard className="text-xl text-purple-600" />
                <span className="font-medium text-gray-700">Debit / Credit Card</span>
              </label>

              {/* Net Banking */}
              <label className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition
                  ${paymentMethod === "netbanking" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}>
                <input
                  type="radio"
                  name="payment"
                  value="netbanking"
                  checked={paymentMethod === "netbanking"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="hidden"
                />
                <FaUniversity className="text-xl text-indigo-600" />
                <span className="font-medium text-gray-700">Net Banking</span>
              </label>

              {/* Cash on Delivery */}
              <label className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition
                  ${paymentMethod === "cod" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="hidden"
                />
                <FaMoneyBillWave className="text-xl text-green-600" />
                <span className="font-medium text-gray-700">Cash on Delivery</span>
              </label>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleConfirmPayment}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-md shadow-md"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Payment;
