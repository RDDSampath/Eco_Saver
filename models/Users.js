const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
    userName: String,
    phoneNumber: String,
    email: String,
    address: String,
    password: { type: String, unique: true },
    userType: String,
    },
    {
    collection: "Users",
    }
);

module.exports = mongoose.model('Users',userSchema);