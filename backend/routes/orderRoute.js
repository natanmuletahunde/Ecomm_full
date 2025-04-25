import express from 'express';
import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  userOrders,
  updateStatus,
  allOrders
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRoute = express.Router();

// Admin routes
orderRoute.post('/list', adminAuth, allOrders);
orderRoute.post('/status', adminAuth, updateStatus);

// Payment features
orderRoute.post('/place', authUser, placeOrder);
orderRoute.post('/stripe', authUser, placeOrderStripe);
orderRoute.post('/razorpay', authUser, placeOrderRazorpay);

// User features
orderRoute.post('/userorders', authUser, userOrders);

export default orderRoute;
