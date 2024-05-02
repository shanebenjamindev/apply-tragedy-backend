const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        avatar: { type: String },
        email: { type: String, required: true, unique: true },
        firstName: { type: String, required: true, },
        lastName: { type: String, required: true, },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        phone: { type: Number },
        address: { type: String },
        avatar: { type: String },
        city: { type: String },
    },
    {
        timestamps: true
    }

);
const User = mongoose.model("User", userSchema);
module.exports = User;