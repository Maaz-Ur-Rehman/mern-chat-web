const mongoose = require('mongoose');

const messegeSchema = new mongoose.Schema({

    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    message: {
        type: String,
        required: true
    }

}, { timestamps: true });

const messege = mongoose.model('message', messegeSchema);

module.exports = messege;