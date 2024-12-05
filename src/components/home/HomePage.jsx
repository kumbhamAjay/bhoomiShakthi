import React from 'react';
import { Link } from 'react-router-dom';
import { TestTube, Sprout, ShoppingBag } from 'lucide-react';
import aboutus from '../../Assets/aboutus1.jpg';
import testImage from '../../Assets/testImage.jpg';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] -mt-18 mb-16 mx-5 md:mx-20">
        <div className="absolute inset-0 shadow-lg">
          <img
            src="https://media.gettyimages.com/id/1451084434/photo/male-farmer-and-agronomist-using-digital-tablet-while-standing-in-corn-field-against-sky.jpg?s=612x612&w=0&k=20&c=VvPFPbmmQEfeM7xPrSBsC-EgS0vtOLbiIZZS8Ai1eRg="
            alt="Farmer in field"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Optimize Your Soil Health
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Professional soil testing and expert recommendations for better crop yield
            </p>
            <Link
              to="/request-test"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-base md:text-lg font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <TestTube className="w-5 h-5" />
              Request Soil Test
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-16 px-4 rounded-xl mx-5 md:mx-20" style={{ backgroundColor: "#95ccb2" }}>
        <h2 className="text-3xl font-bold text-center mb-8">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src={aboutus}
              alt="About Bhoomi"
              className="rounded-full shadow-lg h-64 w-64 object-cover"
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">About Bhoomi Shakthi</h3>
              <p className="text-gray-800">
                Bhoomi is dedicated to providing accurate soil testing and personalized product recommendations to enhance your agricultural practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-800">
                Bhoomi aims to support farmers in making informed decisions for optimal crop growth. Our expert advice ensures healthier harvests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 mx-5 md:mx-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: TestTube, title: "Soil Testing", description: "Comprehensive analysis of soil composition and nutrients" },
            { icon: Sprout, title: "Expert Recommendations", description: "Personalized advice for improving soil health" },
            { icon: ShoppingBag, title: "Quality Products", description: "Access to premium soil enhancement products" },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16 px-4 rounded-xl mx-5 md:mx-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={testImage} alt="Process" className="rounded-lg shadow-lg w-full h-auto" />
          <div className="space-y-6">
            {[
              { step: "1", title: "Request a Test", description: "Schedule a soil test at your location" },
              { step: "2", title: "Sample Collection", description: "Our experts will collect soil samples from your field" },
              { step: "3", title: "Get Results", description: "Receive analysis and personalized recommendations" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of farmers who trust Bhoomi Shakthi for their soil analysis needs
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition-colors"
          >
            Create Account
          </Link>
          <Link
            to="/request-test"
            className="bg-white hover:bg-gray-100 text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition-colors"
          >
            Request Test
          </Link>
        </div>
      </section>
    </div>
  );
}
