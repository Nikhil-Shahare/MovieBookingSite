import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Function for connecting to the MongoDB database
export const connect = () => {
  mongoose
    .connect(process.env.MONGO) // Connect to the MongoDB database using the connection string from the environment variables
    .then(() => {
      console.log("Connected to DB"); // Log a message indicating successful connection
    })
    .catch((err) => {
      throw err; // Throw an error if the connection fails
    });
};
