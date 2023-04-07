
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import MovieBookRoutes from "./routes/moviebook.js";
const app = express();

import {connect} from './dbconnection/database.js'

//middlewares
app.use(cors({

  methods: 'GET, POST',

}));
app.use(express.json());
app.use("/api",MovieBookRoutes);



app.listen(process.env.port, () => {
  connect();
  console.log("Connected to Server");
});
