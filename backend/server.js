const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const productRoute = require("./routes/productRoute");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5174", "https://inventory-app-backend-jdky.onrender.com"],
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes Middleware
app.use("/api/users", userRoutes);
app.use("/api/products", productRoute);
app.use("/api/contactus", contactRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error middeware
app.use(errorHandler);

// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.mongoDB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on PORT :", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
