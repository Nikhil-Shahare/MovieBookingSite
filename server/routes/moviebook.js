import express from "express";
import {Moviebook,getlastmoviebookdetails}  from "../controllers/Moviebook.js";

const router = express.Router();


router.post("/booking", Moviebook )
router.get("/booking", getlastmoviebookdetails )

export default router;
