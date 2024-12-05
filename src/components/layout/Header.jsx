import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Home, TestTube, ShoppingBag, FileSpreadsheet, User } from 'lucide-react';
import logo from '../../Assets/logo.jpg'

const navLinks = [
  
  {id:1, to: '/request-test', icon: TestTube, label: 'Request Test' },
  {id:2, to: '/test-report', icon: FileSpreadsheet, label: 'Reports' },
  {id:3, to: '/shop', icon: ShoppingBag, label: 'Shop' },
  {id:4, to: '/orders', icon: FileSpreadsheet, label: 'Orders' },
  {id:5, to: '/login', icon: User, label: 'Login' },
];

export default function Header() {
   const [cid,setCid]=useState();
  const activeTab=(id)=>{

setCid(id);

  }
  return (
    <nav className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 ml-20">
        <div className="flex items-center justify-between h-16">
          {/* <Link to="/" className="flex items-center gap-2">
            <Leaf className="w-6 h-6" />
            <span className="font-bold text-xl">SoilTest Pro</span>
          </Link> */}
          <Link onClick={()=>setCid(null)} to={'/'} className="flex items-center gap-2">
          <img
              src={logo}
              alt="Logo"
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
<span>Bhoomi Shakthi</span></Link>
          
          
          <div className="hidden md:flex items-center gap-6 ">
            {navLinks.map(({ to, icon: Icon, label,id }) => (
              <Link 
              style={ cid==id?{color:"yellow"}:{color:"white"}}
              onClick={()=>activeTab(id)}
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
    </nav>
  );
}
