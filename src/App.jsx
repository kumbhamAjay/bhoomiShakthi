import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import SoilTestRequest from './components/soil/SoilTestRequest';
import SoilTestReport from './components/soil/SoilTestReport';
import ProductList from './components/shop/ProductList';
import OrderList from './components/shop/OrderList';
import HomePage from './components/home/HomePage';
import { mockSoilResults, mockProducts, mockOrders } from './data/mockData';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/request-test" element={<SoilTestRequest />} />
          <Route path="/test-report" element={<SoilTestReport results={mockSoilResults} />} />
          <Route path="/shop" element={<ProductList products={mockProducts} onAddToCart={(id) => console.log('Added to cart:', id)} />} />
          <Route path="/orders" element={<OrderList orders={mockOrders} />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
