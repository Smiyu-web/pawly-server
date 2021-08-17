import mongoose from "mongoose";

export const Weight = mongoose.model("Weight", { weightNum: String });
