import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import video from '../Videos/farm1.mp4';
import './style.css';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Account created successfully!');
  };

  return (
    <div
      className="flex justify-center items-center w-screen h-screen relative bg-cover bg-center"
      style={{
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Background Video */}
      <video
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-80"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Signup Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg sm:max-w-md px-6 py-8 bg-black/70 text-white shadow-lg rounded-lg flex flex-col"
        style={{ position: 'absolute' }}
      >
        {/* Icon and Title */}
        <div className="flex items-center justify-center mb-6">
          <UserPlus className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-2xl sm:text-xl font-bold text-center mb-6">Create an Account</h2>

        {/* Full Name Input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-bold mb-2 text-gray-200"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring focus:ring-green-300"
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-bold mb-2 text-gray-200"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring focus:ring-green-300"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-6">
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
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:ring focus:ring-green-300"
          >
            Sign Up
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">
            Already registered?{' '}
            <Link
              to="/login"
              className="text-yellow-400 hover:underline hover:text-yellow-300"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
