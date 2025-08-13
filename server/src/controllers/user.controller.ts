import type { NextFunction, Request, Response } from "express";
import { signUpSchema } from "../utils/signUpSchema.js";
import { error } from "console";
import z from "zod";
import { User } from "../models/user.model.js";


const registerUser=async (req:Request,res:Response,next:NextFunction) => {
    try {
      const result=signUpSchema.safeParse(req.body)
      if(result.error){
        res.status(400).json({error:z.treeifyError(result.error)})
      }
      const {username,email,password}=req.body;
      const findUser=await User.findOne({email})
      if(findUser){
        res.status(403).json({message:""})
      } 
    } catch (error:any) {
        console.log(error)
        next(error)
    }
}

const loginUser=async (req:Request,res:Response,next:NextFunction) => {
    try {
        const result=signIn
    } catch (error:any) {
        console.log(error)
        next(error)
    }
}

const logoutUser=async (req:Request,res:Response,next:NextFunction) => {
    try {
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export {registerUser,loginUser,logoutUser}