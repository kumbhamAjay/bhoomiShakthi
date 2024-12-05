import React from 'react';
import { Beaker, Leaf, Droplets } from 'lucide-react';

export default function SoilTestReport({ results }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-10 ml-20 mr-20">
      <h2 className="text-2xl font-bold mb-6">Soil Test Report</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Beaker className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">pH Level</h3>
          </div>
          <p className="text-2xl font-bold">{results.pH}</p>
          <p className="text-sm text-gray-600">
            {results.pH < 6.5 ? 'Acidic' : results.pH > 7.5 ? 'Alkaline' : 'Neutral'}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">Organic Matter</h3>
          </div>
          <p className="text-2xl font-bold">{results.organic_matter}%</p>
          <p className="text-sm text-gray-600">
            {results.organic_matter < 3 ? 'Low' : results.organic_matter > 5 ? 'High' : 'Moderate'}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">NPK Levels</h3>
          </div>
          <div className="space-y-2">
            <p>Nitrogen: {results.nitrogen} mg/kg</p>
            <p>Phosphorus: {results.phosphorus} mg/kg</p>
            <p>Potassium: {results.potassium} mg/kg</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-3">Recommendations</h3>
        <ul className="list-disc list-inside space-y-2">
          {results.recommendations.map((rec, index) => (
            <li key={index} className="text-gray-700">{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
