import Moviebooking from "../models/Moviebooking.js";

export const Moviebook = async (req, res, next) => {
  const newmoviebook = new Moviebooking({ ...req.body,
    createdAt: Date.now() });
  try {
    const savedmoviebook= await newmoviebook.save();
    res.status(200).json(savedmoviebook);
  } 
  catch (err) {
    next(err);
  }
};

export const getlastmoviebookdetails=async (req, res) => {
 
    
    try {
    
      const latestBooking = await Moviebooking.findOne().sort({ createdAt:-1 }).exec();
      res.status(200).json(latestBooking);
    } catch (err) {
      next(err);
    }

};





