const mongoose = require('mongoose');

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

const MessageSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [2, "Email must be at least 2 characters"],
        validate: {
            validator: function (value) {
                return emailRegex.test(value);
            },
            message: 'Invalid email address',
        }
    },
    message: {
        type: String,
        required: [true, "Message is required"]
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Message', MessageSchema);