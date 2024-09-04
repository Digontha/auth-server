const mongoose = require('mongoose');


const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Database is connected successfully");

    mongoose.connection.on("error", (error) => {
      console.error("Database connection error", error);
    });
  } catch (error) {
    console.error("Initial database connection error", error);
  }
};

module.exports = dbConnection;