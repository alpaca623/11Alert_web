import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  sex: String,
  kakaoId: String,
  facebookId: String
});

const model = mongoose.model("User", UserSchema);

export default model;