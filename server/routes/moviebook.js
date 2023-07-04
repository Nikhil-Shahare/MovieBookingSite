import express from "express";
import { Moviebook, getlastmoviebookdetails } from "../controllers/Moviebook.js";

const router = express.Router();

// Define routes for movie booking
router.post("/booking", Moviebook); // POST request to create a new movie booking
router.get("/booking", getlastmoviebookdetails); // GET request to retrieve the details of the last movie booking

export default router;
