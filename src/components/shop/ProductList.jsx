import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-20 mr-20 mt-10">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">${product.price}</span>
              <button
                onClick={() => onAddToCart(product.id)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
