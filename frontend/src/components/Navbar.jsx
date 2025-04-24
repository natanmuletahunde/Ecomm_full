import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, token, setToken, navigate, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <div className='flex items-center justify-between py-5 font-medium relative'>

      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} className='w-36' alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 text-blue-600' : 'flex flex-col items-center gap-1'}>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink to='/collection' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 text-blue-600' : 'flex flex-col items-center gap-1'}>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 text-blue-600' : 'flex flex-col items-center gap-1'}>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>

        {/* CONTACT with Dropdown */}
        <div className='relative group'>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'flex flex-col items-center gap-1 text-blue-600' : 'flex flex-col items-center gap-1'}>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
          </NavLink>
          <div className='hidden group-hover:flex flex-col absolute top-10 left-0 w-40 bg-white shadow-lg text-gray-600 z-50'>
            <Link to='/contact/email' className='px-4 py-2 hover:bg-gray-100'>Email Us</Link>
            <Link to='/contact/support' className='px-4 py-2 hover:bg-gray-100'>Customer Support</Link>
            <Link to='/contact/faqs' className='px-4 py-2 hover:bg-gray-100'>FAQs</Link>
          </div>
        </div>
      </ul>

      {/* Search Icon */}
      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />
      </div>

      {/* Profile Dropdown */}
      <div className='group relative'>
        <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile" />
        {token && (
          <div className='group-hover:block hidden absolute right-0 pt-4 z-50'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        )}
      </div>

      {/* Cart */}
      <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
          {getCartCount()}
        </p>
      </Link>

      {/* Mobile Menu */}
      <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu" />
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
