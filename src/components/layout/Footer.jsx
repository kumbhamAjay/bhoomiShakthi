import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{position:"absolute",left:"0",right:"0"}} className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div style={{paddingRight:"100px"}}>
            <h3 className="text-lg font-semibold mb-4">About Bhoomi Shakthi</h3>
            <p className="text-gray-400">
              Empowering farmers with precise soil analysis and expert recommendations for optimal crop yield.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/request-test" className="text-gray-400 hover:text-white">Request Soil Test</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop Products</Link></li>
              <li><Link to="/signup" className="text-gray-400 hover:text-white">Create Account</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@bhoomishakthi.com</p>
            <p className="text-gray-400">Phone: 9871234567</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
