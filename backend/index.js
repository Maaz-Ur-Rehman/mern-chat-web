const express = require('express');

const dotenv = require('dotenv');

dotenv.config();
const app = express();
const authRoute = require('./router/authRoute');
const port = process.env.PORT || 7000;
const db = require('./db/connectDb.js');

db.connect;;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json());

app.use('/api/user', authRoute);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
