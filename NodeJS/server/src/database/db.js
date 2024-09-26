const mongoose = require("mongoose");
const { DB, DB_PORT, DB_HOST } = process.env;

exports.createDbInstance = () => {
  // Create mongoDB connection
  const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB}`;
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("MongoDB Connected!");
    })
    .catch((err) => {
      console.error("MongoDB Connection Error!", err);
    });
};
