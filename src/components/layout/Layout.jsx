import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../../Assets/logo.jpg";
import './spinner.css'

export default function Layout({ children }) {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#95ccb2",
        position: "relative",
        border: "2px soild red",
      }}
      className="min-h-screen bg-gray-50"
    >
      <Header />
      {load ? (
        <>
          <main className=" px-0 py-0">{children}
         
            <Footer />
            
          
          </main>
         
        </>
      ) : (
        <>
         
          <div className="spinner">
          <img src={logo} alt="Logo" className="spinner-logo" />
          <div className="spinner-circle"></div>
        </div>
        </>
      )}
    </div>
  );
}
