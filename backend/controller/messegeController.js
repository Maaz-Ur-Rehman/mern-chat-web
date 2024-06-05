const conversationModel = require("../model/conversationModel")
const messegeModel = require("../model/messegeModel")
const { getReciverSockeId, io } = require("../socket/socket")
const sendMessage = async (req, res) => {
    try {
        const { receiverId } = req.params
        // console.log(receiverId, "receiverId")
        const { messege } = req.body
        // console.log(messege, "messege")

        const senderId = req.userId

        let conversation = await conversationModel.findOne({ participants: {
            $all: [senderId, receiverId]} })
        if (!conversation) {
            conversation = await conversationModel.create({
                participants: [receiverId,senderId, ]
            })
        }
        // console.log(conversation, "conversation")

        const newMessege = new messegeModel({
            senderId: senderId,
            receiverId: receiverId,
            message: messege
        })
        // console.log(newMessege, "newMessege")

        if (newMessege) {
            conversation.messages.push(newMessege._id)
        }
        await Promise.all([newMessege.save(), conversation.save()])
        const reciverSocketId=getReciverSockeId(receiverId)

        console.log(reciverSocketId, "reciverSocketId")
        if (reciverSocketId) {
            io.to(reciverSocketId).emit("newMessege", newMessege)
        }

        res.status(201).json(newMessege)
    }
    catch (err) {
        console.log(err);
    }
}

const getMesseges = async (req, res) => {
    try {
        const { receiverId } = req.params;
        const senderId = req.userId;

        // Find conversation where both sender and receiver are participants
        const conversation = await conversationModel.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate('messages'); // Populate the messeges field
        // console.log(conversation,"found")
        // If no conversation is found, return a 404 error
        if (!conversation) {
            return res.status(200).json([]);
        }

        // Retrieve populated messages from the conversation
        const messages = conversation.messages;
        // console.log(messages)

        // Return messages as JSON response
        res.status(200).json(messages);
    } catch (errors) {
        // If an error occurs, return a 500 error with the error message
        res.status(500).json({
            error: errors.message
        });
    }

}

module.exports = { sendMessage, getMesseges };