import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    weightNum: Number,
    day: String,
  },
  { timestamps: true }
);

export const Weight = mongoose.model("Weight", schema);
