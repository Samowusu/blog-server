import Post from "../models/Post";
import { BadRequestError, NotFoundError } from "../errors";

const getAllPostsByUser = async (userId: string) => {
  const posts = await Post.find({ createdBy: userId }).sort("createdAt");
  return posts;
};

const getPost = async (userId: string, postId: string) => {
  const post = await Post.findOne({
    _id: postId,
    createdBy: userId,
  });

  if (!post) {
    throw new NotFoundError(`No post with id ${postId}`);
  }

  return post;
};

const createPost = async (userId: string, blogPost: string) => {
  const createdPost = await Post.create({ post: blogPost, createdBy: userId });
  return createdPost;
};

const updatePost = async (userId: string, postId: string, blogPost: string) => {
  if (blogPost === "") {
    throw new BadRequestError("Blog post can't be empty");
  }
  const updatedPost = await Post.findByIdAndUpdate(
    { _id: postId, createdBy: userId },
    { post: blogPost },
    { new: true, runValidators: true }
  );
  if (!updatedPost) {
    throw new NotFoundError(`No post with id ${postId}`);
  }
  return updatedPost;
};

const deletePost = async (userId: string, postId: string) => {
  const deletedPost = await Post.findOneAndDelete({
    _id: postId,
    createdBy: userId,
  });
  if (!deletedPost) {
    throw new NotFoundError(`No post with id ${postId}`);
  }

  return deletedPost;
};

export const PostService = {
  getAllPostsByUser,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
