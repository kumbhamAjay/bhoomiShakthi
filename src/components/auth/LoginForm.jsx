import React, { useState } from "react";
import { Phone } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import video from "../Videos/farm.mp4";
import "./style.css";

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = (e) => {
    e.preventDefault();
    toast.success("OTP sent successfully!");
    setOtpSent(true);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    toast.success("Login successful!");
  };

  return (
    <div
      className="flex justify-center items-center w-screen h-screen relative bg-cover bg-center"
      style={{
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Background Video */}
      <video
        onLoadedMetadata={(e) => (e.target.playbackRate = 1)}
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-80"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Form */}
      <form
        onSubmit={otpSent ? handleVerifyOTP : handleSendOTP}
        className="w-full max-w-lg sm:max-w-md px-6 py-8 bg-black/70 text-white shadow-lg rounded-lg flex flex-col"
      >
        {/* Icon and Title */}
        <div className="flex items-center justify-center mb-6">
          <Phone className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-2xl sm:text-xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        {/* Phone Input */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-bold mb-2 text-gray-200"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring focus:ring-green-300"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={otpSent}
          />
        </div>

        {/* OTP Input */}
        {otpSent && (
          <div className="mb-6">
            <label
              htmlFor="otp"
              className="block text-sm font-bold mb-2 text-gray-200"
            >
              Enter OTP
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring focus:ring-green-300"
              id="otp"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:ring focus:ring-green-300"
          >
            {otpSent ? "Verify OTP" : "Send OTP"}
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm mt-6 text-gray-300">
          Don't Have an Account?{" "}
          <Link
            to="/signup"
            className="text-yellow-400 hover:underline hover:text-yellow-300"
          >
            Sign Up here
          </Link>
        </p>
      </form>
    </div>
  );
}
