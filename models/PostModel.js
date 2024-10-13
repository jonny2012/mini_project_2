import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  author: { type: String },
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: Date,
});
const Post = mongoose.model("post", PostSchema);

export { Post };
