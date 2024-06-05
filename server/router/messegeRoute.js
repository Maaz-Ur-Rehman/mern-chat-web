const express = require('express');
const { sendMessage, getMesseges } = require('../controller/messegeController');
const protectRoute = require('../middleware/protectRoute');
const router = express.Router();

router.post('/sendmessege/:receiverId', protectRoute, sendMessage)
router.get('/getmessege/:receiverId', protectRoute, getMesseges)



module.exports = router;