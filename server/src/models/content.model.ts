import mongoose, { Schema } from "mongoose";

const contentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enums: ["image", "video", "article", "audio"],
      required: true,
    },
    tag: [
      {
        type: String,
        required: true,
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Content = mongoose.model("Content", contentSchema);
