import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import authVerify from "../middleware/auth.middleware.js";


const authRouter=Router()

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.post("/logout",authVerify,logoutUser)

export default authRouter;

