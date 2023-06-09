// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const app = express();
// const cors = require("cors");

// mongoose.connect(
//   "mongodb+srv://Muqadisa:muqadisa1@cluster0.t4cixon.mongodb.net/LMS"
//     //"mongodb://127.0.0.1:27017/Project"
//     // { useNewUrlParser: true, useUnifiedTopology: true,
//     // }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));


//   app.use(express.static("public"));
//   app.use(express.json()); //important for recieving api calls
//   app.use(cors())
  
// const User= require( './Routes/User.js')
//   app.use('/api/user',User)

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });

import express from "express";
import mongoose from "mongoose";
//import bodyParser from "body-parser";
import cors from "cors";

const app = express();

mongoose
.connect("mongodb+srv://Muqadisa:muqadisa1@cluster0.t4cixon.mongodb.net/LMS")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

import User from "./Routes/User.js";
app.use("/api", User);

app.listen(4000, () => {
console.log("Server started on port 4000");
});






