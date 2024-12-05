import React from 'react';
import { Link } from 'react-router-dom';
import { TestTube, Sprout, ShoppingBag } from 'lucide-react';
import aboutus from '../../Assets/aboutus1.jpg';
import testImage from '../../Assets/testImage.jpg';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] -mt-18 mb-16 mx-4 sm:mx-10 md:mx-20">
        <div className="absolute inset-0" style={{ boxShadow: "0px 0px 10px grey" }}>
          <img
            src="https://media.gettyimages.com/id/1451084434/photo/male-farmer-and-agronomist-using-digital-tablet-while-standing-in-corn-field-against-sky.jpg?s=612x612&w=0&k=20&c=VvPFPbmmQEfeM7xPrSBsC-EgS0vtOLbiIZZS8Ai1eRg="
            alt="Farmer in field"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              Optimize Your Soil Health
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Professional soil testing and expert recommendations for better crop yield
            </p>
            <Link
              to="/request-test"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <TestTube className="w-5 h-5" />
              Request Soil Test
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16 px-4 rounded-xl mx-4 sm:mx-10 md:mx-20" style={{ backgroundColor: "#95ccb2" }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-5">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src={aboutus}
              alt="Soil testing process"
              className="shadow-lg rounded-full h-64 w-64 object-cover"
            />
          </div>
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">About Bhoomi Shakthi</h3>
              <p className="text-gray-800">
                Bhoomi is dedicated to providing accurate soil testing and personalized product recommendations to enhance your agricultural practices. 
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-800">
                With a focus on sustainability and productivity, Bhoomi aims to support farmers in making informed decisions for optimal crop growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 mx-4 sm:mx-10 md:mx-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TestTube className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Soil Testing</h3>
            <p className="text-gray-600">
              Comprehensive analysis of soil composition and nutrients.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Expert Recommendations</h3>
            <p className="text-gray-600">
              Personalized advice for improving soil health.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quality Products</h3>
            <p className="text-gray-600">
              Access to premium soil enhancement products.
            </p>
          </div>
        </div>
      </section>

      {/* Other sections */}
      {/* Apply similar responsive changes for remaining sections */}
    </div>
  );
}
