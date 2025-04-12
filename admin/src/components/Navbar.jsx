import React from 'react'
import { assets } from '../assets/assets.js'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-[4%] py-3 bg-white shadow-sm'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="Logo" />
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm hover:bg-gray-700 transition duration-300'>
        Log Out
      </button>
    </div>
  )
}

export default Navbar
