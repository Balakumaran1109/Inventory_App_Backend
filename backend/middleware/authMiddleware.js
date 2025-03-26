const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(401);
      throw new Error("Not Authorized, please login");
    }

    // Verify token
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Get user id from token
    const user = await User.findById(verifyToken.id).select("-password");

    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not Authorized, please login");
  }
});

module.exports = protect;
