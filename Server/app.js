require("dotenv").config();
const Products = require("../Server/Models/product.Schema")

const express = require('express');
const app =express();
require("./DB/conn");
const cookieParser = require('cookie-parser')

const DefaultData = require("../Server/defaultData")

const mongoose = require("mongoose");

const Port = 8005;

const cors = require("cors");
const router = require("../Server/Routes/Router");

app.use(express.json());
app.use(cookieParser(""));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,  // Enable credentials (cookies, authorization headers)
  }));
app.use(router);

app.listen(Port,()=>{
    console.log(`Server is running on Port no. ${Port}`)
});

DefaultData();

