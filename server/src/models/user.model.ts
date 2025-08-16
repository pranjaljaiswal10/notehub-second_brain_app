import { Schema, models, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

userSchema.methods.getJWT = function () {
  const user = this;
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET_KEY as string,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

userSchema.methods.validatePassword = async function (passwordByUser: string) {
  const user = this;
  const validate = await bcrypt.compare(passwordByUser, user.password);
  return validate;
};

export const User = models?.User || model<IUser>("User", userSchema);
