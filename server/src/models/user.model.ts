import { Schema,models,model } from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  profilePictureUrl: string;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePictureUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User=models?.User || model<IUser>("User",userSchema)
