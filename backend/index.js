const express = require('express');

const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const authRoute = require('./router/authRoute');
const messageRoute = require('./router/messegeRoute');
const userRoute = require('./router/userRoute');
const port = process.env.PORT || 7000;
const db = require('./db/connectDb.js');
const cookieParser = require('cookie-parser');
const { app, server } = require('./socket/socket.js');
db.connect;;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/message', messageRoute);
app.use('/api/user', userRoute)
app.get('/', (req, res) => {
    res.send('Hello World!');
});
