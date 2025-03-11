const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./utils/db");
const compression =require('compression')

dotenv.config();
connectDB(); 

const app = express();
app.use(express.json());
app.use(cors());
app.use(compression())

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.get('/data',
  (req, res) => {
    const bigData = "hello ".repeat(1000); 
    res.send(bigData)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
