const express = require('express');

const dotenv = require('dotenv');

dotenv.config();
const app = express();
const authRoute = require('./router/authRoute');
const messageRoute = require('./router/messegeRoute');
const userRoute = require('./router/userRoute');
const port = process.env.PORT || 7000;
const db = require('./db/connectDb.js');
const cookieParser = require('cookie-parser');
db.connect;;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use(cookieParser());
app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/message', messageRoute);
app.use('/api/user', userRoute)
app.get('/', (req, res) => {
    res.send('Hello World!');
});
