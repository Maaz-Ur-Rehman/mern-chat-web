const mongoose = require('mongoose');

mongoose.connect(process.env.MOONGOOSE_URL, {

}).then(() => {
    console.log('Database connected successfully');
}).catch((err) => {
    console.log(err);
});