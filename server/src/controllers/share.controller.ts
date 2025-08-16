import { NextFunction, Request, Response } from "express";
import { shareSchema } from "../utils/shareSchema";
import z from "zod";


const sharelink=async (req:Request,res:Response,next:NextFunction) => {
    try {
          const result=shareSchema.safeParse(req.query)
          if(result.error){
            res.status(400).json({message:z.treeifyError})
          }
    } catch (error) {
        console.log(error)
       next(error)
    }
}

const getShareData=async (req:Request,res:Response,next:NextFunction)=>{
    try {
        
    } catch (error) {
        
    }
}

