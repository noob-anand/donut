import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: String,
    username: String,
    profilepic: String,
    coverpic: String,
    upi: String,
    qr: String,
  },
  { timestamps: true }
);


export default mongoose.models.User ||
  mongoose.model("User", UserSchema, "users");
