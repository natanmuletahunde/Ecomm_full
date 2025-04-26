import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import fs from 'fs';
import path from 'path';

import connectDb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js';

// App config
const app = express();
const port = process.env.expressPORT || 4000;

// Create 'uploads' directory if it doesn't exist
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
  console.log('✅ uploads folder created');
}

// Connect to database and cloudinary
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// Serve static files from the uploads folder
app.use('/uploads', express.static('uploads'));

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter)
app.use('/api/order/', orderRoute)
// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});


connectDb();

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
