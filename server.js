import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config(); // Load .env variables

const app = express();

connectDB(); // Connect to MongoDB

app.get("/", (req, res) => {
  res.send("MongoDB connected!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});