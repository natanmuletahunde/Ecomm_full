import mongoose from 'mongoose';

const connectDb = async () => {
  try {

    await mongoose.connect("mongodb+srv://natanmuleta77:nata123ABC@cluster0.mdemnuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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
