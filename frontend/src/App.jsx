import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import all page components
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Orders from './pages/Orders';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Verify from './pages/Verify';
// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

// Import ToastContainer only (no need for toast here)
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Toast notifications */}
      <ToastContainer />

      {/* Navbar and Search Bar */}
      <Navbar />
      <SearchBar />

      {/* Main Page Routes */}
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
