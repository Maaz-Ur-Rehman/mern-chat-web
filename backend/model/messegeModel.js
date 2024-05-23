const mongoose = require('mongoose');

const messegeSchema = new mongoose.Schema({

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    message: {
        type: String,
        required: true
    }

}, { timestamps: true });

const messege = mongoose.model('messege', messegeSchema);

module.exports = messege;