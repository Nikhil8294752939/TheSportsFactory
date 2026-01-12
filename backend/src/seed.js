import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  {
    name: "Football Boots Red",
    price: 2999,
    image: "/products/Shoes/shoe1.avif",
    category: "shoes",
    gender: "men",
    description: "High-performance football boots designed for speed."
  },
  {
    name: "Football Boots Black",
    price: 2999,
    image: "/products/Shoes/shoe2.webp",
    category: "shoes",
    gender: "men",
    description: "Lightweight boots with excellent control."
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products added ✅");
    process.exit();
  });
