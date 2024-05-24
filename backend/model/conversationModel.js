const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    messeges: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'messege'
        }
    ]
}, { timestamps: true })

const conversationModel = mongoose.model('conversation', conversationSchema);

module.exports = conversationModel;