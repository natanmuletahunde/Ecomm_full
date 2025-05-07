import mongoose from 'mongoose';

const connectDb = async () => {
  try {


    await mongoose.connect("mongodb+srv://natanmuleta77:Nathan12345@cluster0.mugunfn.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0");
                            

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDb;
