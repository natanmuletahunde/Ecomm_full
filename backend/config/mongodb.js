import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const MONGO_URI = "mongodb+srv://natanmuleta77:1234natan%40%23@cluster0.paeyazt.mongodb.net/yourdbname?retryWrites=true&w=majority";

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDb;
