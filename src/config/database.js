const mongoose = require("mongoose");
const config = require("./index");


const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false); 

      const connection =  await mongoose.connect(config.MONGODB_URI);
        console.log("Database connected successfully " + connection.connection.host);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;