require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Restaurant = require("./models/Restaurant");

const app = express();
app.use(express.json());

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("MongoDB connected");
    console.log("DB name:", mongoose.connection.name);
    console.log("Collection name:", Restaurant.collection.name);

    const count = await Restaurant.countDocuments();
    console.log("Restaurants count:", count);
  })
  .catch((err) => console.error("MongoDB connection error:", err));


app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
