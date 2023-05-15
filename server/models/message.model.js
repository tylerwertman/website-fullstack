const mongoose = require('mongoose');

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

const MessageSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be longer"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [6, "Email must be valid"],
        validate: {
            validator: function (value) {
                return emailRegex.test(value);
            },
            message: 'Invalid email address',
        }
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        minlength: [10, "Message must be longer"],
        maxlength: [200, "Message must be shorter"]
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Message', MessageSchema);