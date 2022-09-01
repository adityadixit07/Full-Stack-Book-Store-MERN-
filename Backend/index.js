const express = require("express");
const mongoose = require("mongoose");
const router=require('./routes/bookRoutes')
const cors=require('cors');
const app = express();

// middleware
// app.use('/', (res, req, next) => {
//   res.send("this is the book store app using react");
// });
app.use(express.json())
app.use(cors()) //this is used to break security
app.use("/books",router)


mongoose
  .connect(
    "mongodb+srv://admin:5as6bCA2ZLJZZrNI@cluster0.kio6o4p.mongodb.net/BookStore?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongoose connected to database successfully");
  })
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
