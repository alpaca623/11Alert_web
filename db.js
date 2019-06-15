import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.once("open", function() {
  console.log("✅ connection mongo db!");
});
db.on("error", error => console.log('❌ error occur!'));


