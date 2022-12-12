const mongoose = require("mongoose");
const DB = "mongodb+srv://mern-chat-user:rohit123@cluster0.h9uk1.mongodb.net/flexmoney";

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("database connection seccessfull");
}).catch((err)=>{console.log(err)});