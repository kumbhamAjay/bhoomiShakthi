import React from 'react';
import { LucideIcon } from 'lucide-react';

export default function Card({ title, description, icon: Icon, className = '', children }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      {Icon && (
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-green-600" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
      {children}
    </div>
  );
}
