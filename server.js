const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import Routes
const authRoute = require("./Routes/auth");

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

// Middlewares
app.use(express.json({ extended: false }));

// Route Middlewares
app.use("/api/user", authRoute);

app.listen(3040, () => console.log("Server started"));
