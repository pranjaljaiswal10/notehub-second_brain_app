import type { NextFunction, Request, Response } from "express";


const authVerify=async (req:Request,res:Response,next:NextFunction) => {
    try {
        const token=await req.cookies.token || req.headers["authorization"]?.replace("bearer","")
        if(!token){
           res.status(400).json({error:""}) 
        }
    } catch (error:any) {
        
    }
}