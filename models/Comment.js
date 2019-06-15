import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  comment: String,
  writer: String,
  writerId: String
});

const model = mongoose.model("comment", commentSchema);

export default model;
