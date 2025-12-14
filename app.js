
const express = require("express");
const app  = express(); 
const errorMiddleware = require('./middleware/error.js')
const cookieParser = require("cookie-parser")
var cors = require('cors')

app.use(cors()) 
app.use(express.json());
app.use(cookieParser());

const user  = require("./routes/userRoutes")
const postRoutes = require("./routes/postRoutes");

app.use("/api/v1", postRoutes);
app.use("/api/v1",user)

app.use(errorMiddleware)
module.exports = app;
