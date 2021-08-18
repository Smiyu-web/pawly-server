import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    weightNum: Number,
  },
  { timestamps: true }
);

export const Weight = mongoose.model("Weight", schema);
