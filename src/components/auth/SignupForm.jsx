import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import video from '../Videos/farm1.mp4'
import "./style.css"

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
    <div className="" style={{display:"flex",width:"100vw",height:"100vh",gap:"20px",position:"relative",left:"0px",right:"0px",zIndex:"2",margin:"0 auto",justifyContent:"center",alignItems:"center"}}>
      <video loop autoPlay muted style={{width:"100%",height:"100%",position:"absolute",opacity:"1",left:"0px",right:"0px",top:"0",zIndex:"-1"}}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 login-form" style={{width:"500px",backgroundColor: "rgb(0 0 0 / 50%)",position:"absolute"}}>
        <div className="flex items-center justify-center mb-6">
          <UserPlus className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6" style={{color:"white"}}>Create an Account</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" style={{color:"white"}} htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" style={{color:"white"}} htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" style={{color:"white"}} htmlFor="phone">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div style={{margin:"20px 0"}}><p style={{color:"white"}}>Already registered?<span style={{color:"yellow"}}><Link to={'/login'}>&nbsp;Login</Link></span></p></div>
      </form>
      <div style={{ border: "",height:"100%",width:"100%" }}>
        
      </div>
    </div>
  );
}
