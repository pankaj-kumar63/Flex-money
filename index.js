const { json } = require('express');
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;

require('./db/conn');
const User = require('./model/userSchema')
app.use(express.json());

app.use(require('./router/auth'));

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`)
})