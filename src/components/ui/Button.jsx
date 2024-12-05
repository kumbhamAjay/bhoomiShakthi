import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  to,
  onClick,
  icon: Icon,
  className = '',
  type = 'button'
}) {
  const baseStyles = "inline-flex items-center gap-2 px-8 py-3 rounded-lg text-lg font-semibold transition-colors";
  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "bg-white hover:bg-gray-100 text-green-600 border-2 border-green-600"
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyles}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonStyles}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}
