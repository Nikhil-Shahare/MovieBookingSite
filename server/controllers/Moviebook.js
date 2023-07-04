import Moviebooking from "../models/Moviebooking.js";

// Controller function for creating a new movie booking
export const Moviebook = async (req, res, next) => {
  const newmoviebook = new Moviebooking({ ...req.body, createdAt: Date.now() });
  try {
    const savedmoviebook = await newmoviebook.save(); // Save the new movie booking to the database
    res.status(200).json(savedmoviebook); // Respond with the saved movie booking details
  } catch (err) {
    next(err); // Pass the error to the next middleware
  }
};

// Controller function for retrieving the details of the last movie booking
export const getlastmoviebookdetails = async (req, res) => {
  try {
    const latestBooking = await Moviebooking.findOne().sort({ createdAt: -1 }).exec(); // Find the latest movie booking based on the creation date
    res.status(200).json(latestBooking); // Respond with the details of the latest movie booking
  } catch (err) {
    next(err); // Pass the error to the next middleware
  }
};
