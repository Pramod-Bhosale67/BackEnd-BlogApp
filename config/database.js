const mongoose  = require("mongoose");

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL, {})
    .then(() => {console.log("Database connect successfully");})
    .catch((error) => {
        console.log(error);
        console.error(error);
        process.exit(1);
    })
}

module.exports = dbConnect;