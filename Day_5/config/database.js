const { error } = require('console');
const mongoose = require('mongoose');

require("dotenv").config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(() => console.log("DB ka connection is Successful"))
    .catch((error) => {
        console.log("Issue in BD Connection: ");
        console.log(error.message);
        // is ka matlab kya hai jee
        process.exit(1);
    });

}

module.exports = dbConnect;
