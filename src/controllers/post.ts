import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { IPost } from "../models/Post";
import { PostService } from "../services/post";

const getAllPostsByUser = async (req: Request, res: Response) => {
  const { userId } = req.user;
  const posts = await PostService.getAllPostsByUser(userId);
  res.status(StatusCodes.OK).json({ posts, count: posts.length });
};

const getPost = async (req: Request, res: Response) => {
  const { userId } = req.user;
  const { id } = req.params;
  const post = await PostService.getPost(userId, id);
  res.status(StatusCodes.OK).json({ post });
};

const createPost = async (req: Request, res: Response) => {
  const { userId } = req.user;
  const { post } = req.body as IPost;

  const createdPost = await PostService.createPost(userId, post);
  res.status(StatusCodes.CREATED).json({ post: createdPost });
};

const updatePost = async (req: Request, res: Response) => {
  const { userId } = req.user;
  const { id } = req.params;
  const { post } = req.body as IPost;
  const updatedPost = await PostService.updatePost(userId, id, post);
  res.status(StatusCodes.OK).json({ post: updatedPost });
};

const deletePost = async (req: Request, res: Response) => {
  const { userId } = req.user;
  const { id } = req.params;
  const deletedPost = await PostService.deletePost(userId, id);
  res.status(StatusCodes.OK).json({ post: deletedPost });
};

export const PostController = {
  getAllPostsByUser,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
