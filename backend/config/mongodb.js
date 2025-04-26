import mongoose from 'mongoose';

const connectDb = async () => {
  try {

    await mongoose.connect("mongodb+srv://natanmuleta77:1234natan%40%23@cluster0.paeyazt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDb;
