const express = require('express');
const { sendMessage, getMesseges } = require('../controller/messegeController');
const protectRoute = require('../middleware/protectRoute');
const router = express.Router();

router.post('/sendmessege/:senderId', protectRoute, sendMessage)
router.get('/getmessege/:senderId', protectRoute, getMesseges)



module.exports = router;