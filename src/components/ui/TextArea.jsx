import React from 'react';
import { LucideIcon } from 'lucide-react';

export default function TextArea({ label, icon: Icon, error, className = '', ...props }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4" />}
          {label}
        </div>
      </label>
      <textarea
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
