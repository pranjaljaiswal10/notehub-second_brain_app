import type { NextFunction, Request, Response } from "express";
import { signUpSchema } from "../utils/signUpSchema";
import z from "zod";
import bcrypt from "bcrypt";
import { User } from "../models/user.model";
import { signInSchema } from "../utils/signinInSchema";

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = signUpSchema.safeParse(req.body);
    if (result.error) {
      res.status(400).json({ error: z.treeifyError(result.error) });
    }
    const { username, email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser) {
      res
        .status(403)
        .json({ message: "User is already exist", success: false });
    }
    const hashPassword = bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });
    res.status(201).json({
      message: "User registered successfully",
      success: true,
      data: newUser,
    });
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = signInSchema.safeParse(req.body);
    if (result.error) {
      res.status(400).json({ message: z.treeifyError(result.error) });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    const validPassword = await user.validatePassword(req.body.password);
    if (!validPassword) {
      res.status(403).json({ messsage: "Invalid credential", success: false });
    }
    const token = user.getJWT();
    const option = {
      httpOnly: true,
      secure: true,
    };
    res
      .cookie("token", token, option)
      .status(200)
      .json({ success: true, message: "User login succesfully" });
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie("token");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { registerUser, loginUser, logoutUser };
