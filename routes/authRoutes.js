const express = require("express");
const { register, login } = require("../controllers/authController");
const rateLimit = require("express-rate-limit");
const router = express.Router();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 3, 
  standardHeaders: true,
  legacyHeaders: false,
  handler: function (req, res, next) {
    return res
      .status(429)
      .json({ error: "Too many requests, please try again late" });
  },
});

router.post("/register", register);
router.post("/login",limiter, login);

module.exports = router;
