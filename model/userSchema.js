const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        required:true,
        type:String,
    },
    contact:{
        required:true,
        type:String,

    },
    gender:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String

    },
    password:{
        required:true,
        type:String
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;