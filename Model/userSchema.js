const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = mongoose.Schema(
    //name, email, password,userType
    {
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        userType: {
            type: String,
            required: true,
        },
    },
    {
        collection: "users",
    }
);

module.exports = mongoose.model("users", userSchema);