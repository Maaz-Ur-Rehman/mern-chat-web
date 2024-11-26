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

const staticPath = path.resolve(__dirname, '../client/dist');
console.log('Serving static files from:', staticPath); // Check the path being used

// Serve static files
app.use(express.static(staticPath));

// Handle all other routes
app.get('*', (req, res) => {
    const indexPath = path.join(staticPath, 'index.html');
    console.log('Serving index.html from:', indexPath); // Check the resolved path

    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error serving index.html:', err);
            res.status(500).send('Something went wrong');
        }
    });
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const port = process.env.PORT || 7000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});