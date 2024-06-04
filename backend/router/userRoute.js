const express = require('express');
const protectRoute = require('../middleware/protectRoute');
const { loginUserForSideBar } = require('../controller/userController');
const router = express.Router();

router.get('/', protectRoute, loginUserForSideBar)



module.exports = router;