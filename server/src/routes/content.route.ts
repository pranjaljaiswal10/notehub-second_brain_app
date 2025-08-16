import { Router } from "express";
import authVerify from "../middleware/auth.middleware";
import {
  addContent,
  deleteContent,
  getContent,
  updateContent,
} from "../controllers/content.controller";

const contentRouter = Router();

contentRouter.post("/", authVerify, addContent);
contentRouter.get("/", authVerify, getContent);
contentRouter.put("/:id", authVerify, updateContent);
contentRouter.delete(":id", authVerify, deleteContent);

export default contentRouter;
