const express=  require('express');
const { default: mongoose } = require('mongoose');
const app=  express();
require('dotenv').config();
const connectDatabase= require("./config/database");



connectDatabase();










app.listen(8000,(req,res)=>{

    console.log('listening on port 8000');
});