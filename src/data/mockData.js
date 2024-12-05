export const mockSoilResults = {
  pH: 6.8,
  nitrogen: 45,
  phosphorus: 30,
  potassium: 200,
  organic_matter: 4.2,
  recommendations: [
    'Add nitrogen-rich fertilizer',
    'Maintain current pH levels',
    'Consider adding organic matter'
  ]
};

export const mockProducts = [
  {
    id: '1',
    name: 'Organic Fertilizer',
    description: 'Natural, slow-release fertilizer for all plants',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800',
    category: 'fertilizer'
  },
  {
    id: '2',
    name: 'Soil pH Tester Kit',
    description: 'Professional-grade pH testing kit for accurate readings',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800',
    category: 'tools'
  },
  {
    id: '3',
    name: 'Micronutrient Mix',
    description: 'Complete blend of essential micronutrients',
    price: 34.99,
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/330300075/WL/HT/ZH/7443034/mix-micronutrients-gujarat-grade-1-1000x1000.jpg',
    category: 'fertilizer'
  }
];

export const mockOrders = [
  {
    id: '1',
    userId: 'user1',
    products: [{ productId: '1', quantity: 2 }],
    status: 'delivered',
    total: 59.98,
    date: '2024-03-15'
  }
];
