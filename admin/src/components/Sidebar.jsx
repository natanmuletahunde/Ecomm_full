import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className="w-full h-screen bg-gray-100 p-4 shadow-md">
      <div className="flex items-center space-x-3 hover:bg-gray-200 p-3 rounded-md transition duration-200">
        <NavLink to="/add" className="flex items-center space-x-2">
          <img src={assets.add_icon} alt="Add Icon" className="w-6 h-6" />
          <p className="text-sm font-medium text-gray-700">Add Items</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
