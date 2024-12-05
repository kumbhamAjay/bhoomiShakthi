import React from 'react';
import { Package } from 'lucide-react';

export default function OrderList({ orders }) {
  return (
    <div className="space-y-6 ml-20 mr-20 mt-10">
      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold">Order #{order.id}</h3>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              order.status === 'delivered' ? 'bg-green-100 text-green-800' :
              order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Date</span>
              <span>{new Date(order.date).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Total Amount</span>
              <span className="font-semibold">${order.total.toFixed(2)}</span>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Products</h4>
            <ul className="space-y-2">
              {order.products.map((item) => (
                <li key={item.productId} className="flex justify-between text-sm">
                  <span>Product #{item.productId}</span>
                  <span>Qty: {item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
