import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: Array, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  sizes: { type: Array, required: true },
  date: { type: Number, required: true },
  bestseller: { type: Boolean, },
  subCategory: { type: String, required: true },
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;
