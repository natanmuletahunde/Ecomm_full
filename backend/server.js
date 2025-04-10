import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDb from './config/mongodb.js'; // Correct
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRouter.js';


// App config
const app = express();
const port = process.env.expressPORT || 4000;
connectDb()
connectCloudinary()  // this function is used for  connect the mongodb 
// middleware
app.use(express.json());
app.use(cors());
//  Api end points
app.use('/api/user', userRouter);
app.use('/api/product',productRouter)
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, ()=>console.log(`Server is running on port ${port}`));