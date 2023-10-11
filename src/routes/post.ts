import express from "express";
import { PostController } from "../controllers/post";

const router = express.Router();

router
  .route("/")
  .post(PostController.createPost)
  .get(PostController.getAllPostsByUser);
router
  .route("/:id")
  .get(PostController.getPost)
  .delete(PostController.deletePost)
  .patch(PostController.updatePost);

export default router;
