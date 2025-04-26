import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl, currency } from '../App'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return null
    try {
      const response = await axios.post(backendUrl + '/api/orders/list', {}, { headers: { token } })

      if (response.data.success) {
        setOrders(response.data.orders)
      } else {
        toast.error(response.error)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (
    <div className="p-5 md:p-10">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Order Page</h3>
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-5 items-start border border-gray-300 rounded-xl shadow-sm p-6 bg-white hover:shadow-md transition-shadow"
          >
            <img className="w-12 h-12 object-contain" src={assets.parcel_icon} alt="Parcel" />

            <div className="text-gray-700">
              <div className="mb-2">
                {order.item.map((item, idx) => (
                  <p className="py-0.5 text-sm" key={idx}>
                    {item.name} x {item.quantity} <span className="text-gray-500">({item.size})</span>
                  </p>
                ))}
              </div>
              <p className="font-semibold mt-3 text-sm">
                {order.address.firstName} {order.address.lastName}
              </p>
              <div className="text-sm text-gray-600">
                <p>{order.address.street},</p>
                <p>{order.address.city}, {order.address.country}, {order.address.zipcode}</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">Phone: {order.address.phone}</p>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p>Items: <span className="font-semibold">{order.item.length}</span></p>
              <p>Method: {order.paymentMethod}</p>
              <p>Payment: <span className={order.payment ? 'text-green-600 font-medium' : 'text-red-500 font-medium'}>
                {order.payment ? 'Done' : 'Pending'}
              </span></p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <p className="font-bold text-lg text-indigo-600">{currency}{order.amount}</p>

            <select
              value={order.status}
              className="p-2 border border-gray-300 rounded-md text-sm font-semibold bg-gray-50 focus:outline-none"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivery">Delivery</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
