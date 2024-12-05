import React, { useState } from 'react';
import { MapPin, Calendar, FileText } from 'lucide-react';
import toast from 'react-hot-toast';

export default function SoilTestRequest() {
  const [formData, setFormData] = useState({
    location: '',
    preferredDate: '',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Soil test request submitted successfully!');
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-20">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Request Soil Test</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter location details"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Preferred Date
              </div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Additional Notes
              </div>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
              placeholder="Any specific requirements or notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
