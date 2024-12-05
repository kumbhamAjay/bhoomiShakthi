export const User = {
  id: '',
  name: '',
  email: '',
  phone: ''
};

export const SoilTest = {
  id: '',
  userId: '',
  status: 'pending', // or 'processing' or 'completed'
  location: '',
  date: '',
  results: null // can be SoilTestResults object or null
};

export const SoilTestResults = {
  pH: 0,
  nitrogen: 0,
  phosphorus: 0,
  potassium: 0,
  organic_matter: 0,
  recommendations: []
};

export const Product = {
  id: '',
  name: '',
  description: '',
  price: 0,
  image: '',
  category: ''
};

export const Order = {
  id: '',
  userId: '',
  products: [{ productId: '', quantity: 0 }],
  status: 'pending', // or 'processing' or 'shipped' or 'delivered'
  total: 0,
  date: ''
};
