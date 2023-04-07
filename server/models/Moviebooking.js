import mongoose from "mongoose";

const   MoviebookingSchema = new mongoose.Schema(
  {
    movie: {
      type: String,
      required: true,
    },
    seats: {
        A1:{type: Number,
            required: true}
            ,
            A2:{type: Number,
                required: true},
            A3:{type: Number,
                    required: true},
            A4:{type:Number,
                required: true},
             D1:{type: Number,
                required: true},
            D2:{type: Number,
            required: true}
},
slot:{
    type:String,
    required:true
}

  },
  { timestamps: true }
);

export default mongoose.model("Moviebooking", MoviebookingSchema);
