import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, TestTube, ShoppingBag, FileSpreadsheet, User } from 'lucide-react';
import logo from '../../Assets/logo.jpg';

const navLinks = [
  { id: 1, to: '/request-test', icon: TestTube, label: 'Request Test' },
  { id: 2, to: '/test-report', icon: FileSpreadsheet, label: 'Reports' },
  { id: 3, to: '/shop', icon: ShoppingBag, label: 'Shop' },
  { id: 4, to: '/orders', icon: FileSpreadsheet, label: 'Orders' },
  { id: 5, to: '/login', icon: User, label: 'Login' },
];

export default function Header() {
  const [cid, setCid] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeTab = (id) => {
    setCid(id);
  };

  return (
    <nav className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 ml-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link onClick={() => setCid(null)} to={'/'} className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
            <span>Bhoomi Shakthi</span>
          </Link>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ to, icon: Icon, label, id }) => (
              <Link
                style={cid === id ? { color: 'yellow' } : { color: 'white' }}
                onClick={() => activeTab(id)}
                key={to}
                to={to}
                className="flex items-center gap-1 hover:text-green-200 transition-colors"
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-green-700 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '70%' }}
      >
        <div className="p-6">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <ul className="mt-8 space-y-6">
            {navLinks.map(({ to, icon: Icon, label, id }) => (
              <li key={to}>
                <Link
                  style={cid === id ? { color: 'yellow' } : { color: 'white' }}
                  onClick={() => {
                    activeTab(id);
                    setIsMenuOpen(false); // Close menu after selection
                  }}
                  to={to}
                  className="flex items-center gap-2 hover:text-green-200 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
