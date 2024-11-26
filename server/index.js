const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const authRoute = require('./router/authRoute');
const messageRoute = require('./router/messegeRoute');
const userRoute = require('./router/userRoute');
const db = require('./db/connectDb.js');
const cookieParser = require('cookie-parser');
const { app, server } = require('./socket/socket.js');

// Connect to the database
db.connect;

// Start the server


// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/message', messageRoute);
app.use('/api/user', userRoute);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });// Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const port = process.env.PORT || 7000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});