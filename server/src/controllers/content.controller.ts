import { NextFunction, Request, Response } from "express";
import { Content } from "../models/content.model";
import { contentSchema } from "../utils/content.schema";
import z from "zod";

const addContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = contentSchema.safeParse(req.body);
    if (result.error) {
      res
        .status(400)
        .json({ success: false, message: z.treeifyError(result.error) });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const content = await Content.find({});
    if (!content) {
      res.status(404).json({ success: false, message: "Bo content found" });
    }
    res.status(200).json({ success: true, data: content });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateContent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const 
    const { id } = req.body;
    const content = await Content.findByIdAndUpdate(
      id,
      { $set: {} },
      { new: true }
    );
    if (!content) {
      res.status(404).json({ message: "Content not found" });
    }
    res
      .status(200)
      .json({
        success: true,
        data: content,
        message: "Content updated successfully",
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteContent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.body;
    const content = await Content.findByIdAndDelete(id);
    if (content) {
      res.status(404).json({ message: "Content not found" });
    }
    res
      .status(200)
      .json({ success: false, message: "Content deleted succesfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { addContent, getContent, updateContent, deleteContent };
