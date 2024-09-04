require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const dbConnection = require('./db');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const getUserRoutes = require("./routes/getUser");


// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/getUser", getUserRoutes);


app.get("/",(req,res)=>{
    res.send("hello world!");
})

const port = process.env.PORT || 5000;

app.listen(port,async()=>{
   await dbConnection();
    console.log(`port ${port}`);
})
