import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import MovieBookRoutes from "./routes/moviebook.js";
const app = express();

import { connect } from './dbconnection/database.js';

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connect();

// Middlewares
app.use(cors({
  methods: 'GET, POST',
}));
app.use(express.json());

// Route for movie booking
app.use("/api", MovieBookRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Connected to Server");
});
