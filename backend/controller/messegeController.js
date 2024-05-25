const conversationModel = require("../model/conversationModel")
const messegeModel = require("../model/messegeModel")
const sendMessage = async (req, res) => {
    try {
        const { senderId } = req.params
        const { messege } = req.body
        console.log(messege, "messege")

        const receiverId = req.userId

        let conversation = await conversationModel.findOne({ participants: [senderId, receiverId] })
        if (!conversation) {
            conversation = await conversationModel.create({
                participants: [senderId, receiverId]
            })
        }
        // console.log(conversation, "conversation")

        const newMessege = new messegeModel({
            senderId: senderId,
            receiverId: receiverId,
            message: messege
        })

        if (newMessege) {
            conversation.messeges.push(newMessege._id)
        }
        await Promise.all([newMessege.save(), conversation.save()])

        res.status(201).json({
            newMessege: newMessege
        })
    }
    catch (err) {
        console.log(err);
    }
}

const getMesseges = async (req, res) => {
    try {
        const { senderId } = req.params
        console.log(senderId, "senderId")
        const receiverId = req.userId

        console.log(receiverId, "receiverId")
        const conversation = await conversationModel.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate('messeges')
        // console.log(conversation, 'converstaino')

        if (!conversation) {
            return res.status(404).json({
                error: "No conversation found"
            })
        }
        const messages = conversation.messeges;

        res.status(200).json(messages);

        // console.log(receiverId, "receiverId")
    }
    catch (errors) {

        res.status(500).json({
            error: errors.message
        })
    }

}

module.exports = { sendMessage, getMesseges };