import React, { useState } from "react";
import { Phone } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import video from "../Videos/farm.mp4";
import "./style.css"

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  // const d=__dirname
  // console.log(d)

  const handleSendOTP = (e) => {
    e.preventDefault();
    // Simulate OTP sending
    toast.success("OTP sent successfully!");
    setOtpSent(true);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    // Simulate OTP verification
    toast.success("Login successful!");
  };

  return (
   
    ///////////////////////////////////////////////
    <div
      className=""
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
      
        position: "relative",
        left: "0px",
        right: "0px",
        zIndex: "2",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        onLoadedMetadata={(e) => (e.target.playbackRate = 1)}
        loop
        autoPlay
        muted
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          opacity: "1",
          left: "0px",
          right: "0px",
          top: "0",
          zIndex: "-1",
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form 
        style={{
          width: "500px",
          backgroundColor: "rgb(0 0 0 / 50%)",
        
        }}
        onSubmit={otpSent ? handleVerifyOTP : handleSendOTP}
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 login-form"
      >
        <div className="flex items-center justify-center mb-6">
          <Phone className="w-12 h-12 text-green-600" />
        </div>
        <h2
          style={{ color: "white" }}
          className="text-2xl font-bold text-center mb-6"
        >
          Login to Your Account
        </h2>

        <div className="mb-4">
          <label
            style={{ color: "white" }}
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            style={{ color: "black",backgroundColor:"white" }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={otpSent}
          />
        </div>

        {otpSent && (
          <div className="mb-6">
            <label
              style={{ color: "white" }}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="otp"
            >
              Enter OTP
            </label>
            <input  style={{ color: "black" }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="otp"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        )}

        <div className="flex items-center justify-center">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            {otpSent ? "Verify OTP" : "Send OTP"}
          </button>
        </div>
        <div>
          <p style={{ color: "white", marginTop: "20px" }}>
            Don't Have Account?
            <span style={{ color: "yellow " }}>
              <Link to={"/signup"}>&nbsp;Sign Up here</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
