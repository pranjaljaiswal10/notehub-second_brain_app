import type { NextFunction, Request, Response } from "express";


const registerUser=async (req:Request,res:Response,next:NextFunction) => {
    try {
        
    } catch (error:any) {
        console.log(error)
        next(error)
    }
}

const loginUser=async (req:Request,res:Response,next:NextFunction) => {
    
}