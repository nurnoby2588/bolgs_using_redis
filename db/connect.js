const mongoose = require("mongoose");
const dbConnect = async () => {
  mongoose
    .connect(
      "mongodb+srv://nurnoby:7NjqFREqm2X2OR7W@cluster0.aprs9ib.mongodb.net/learnNodejs?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("Database connection failed:", error);
    });
};
module.exports = dbConnect;
