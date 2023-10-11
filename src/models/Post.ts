import mongoose, { Schema, Document } from "mongoose";
import { ERROR_MESSAGE } from "../config/utils";

export interface IPost extends Document {
  post: string;
  createdBy: mongoose.Types.ObjectId;
}

const PostSchema = new Schema(
  {
    post: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, ERROR_MESSAGE.user],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IPost>("Post", PostSchema);
