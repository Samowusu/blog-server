import mongoose, { Schema, Document } from "mongoose";
import { ERROR_MESSAGE, emailRegex } from "../config/utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  comparePassword(enteredPassword: string): Promise<boolean>;
  createJWT(): string;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, ERROR_MESSAGE.email],
    match: [emailRegex, ERROR_MESSAGE.validEmail],
    unique: true,
  },
  password: {
    type: String,
    required: [true, ERROR_MESSAGE.password],
    minlength: 6,
    maxlength: 100,
  },
});

// hash users password before saving to DB
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//signs a jwt with the necessary payload,string and options
UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET!,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

//a general fn for comparing passwords
UserSchema.methods.comparePassword = async function (
  canditatePassword: string
) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

export default mongoose.model<IUser>("User", UserSchema);
