"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const Post_1 = __importDefault(require("../models/Post"));
const errors_1 = require("../errors");
const getAllPostsByUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield Post_1.default.find({ createdBy: userId }).sort("createdAt");
    return posts;
});
const getPost = (userId, postId) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield Post_1.default.findOne({
        _id: postId,
        createdBy: userId,
    });
    if (!post) {
        throw new errors_1.NotFoundError(`No post with id ${postId}`);
    }
    return post;
});
const createPost = (userId, blogPost) => __awaiter(void 0, void 0, void 0, function* () {
    const createdPost = yield Post_1.default.create({ post: blogPost, createdBy: userId });
    return createdPost;
});
const updatePost = (userId, postId, blogPost) => __awaiter(void 0, void 0, void 0, function* () {
    if (blogPost === "") {
        throw new errors_1.BadRequestError("Blog post can't be empty");
    }
    const updatedPost = yield Post_1.default.findByIdAndUpdate({ _id: postId, createdBy: userId }, { post: blogPost }, { new: true, runValidators: true });
    if (!updatedPost) {
        throw new errors_1.NotFoundError(`No post with id ${postId}`);
    }
    return updatedPost;
});
const deletePost = (userId, postId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedPost = yield Post_1.default.findOneAndDelete({
        _id: postId,
        createdBy: userId,
    });
    if (!deletedPost) {
        throw new errors_1.NotFoundError(`No post with id ${postId}`);
    }
    return deletedPost;
});
exports.PostService = {
    getAllPostsByUser,
    getPost,
    createPost,
    updatePost,
    deletePost,
};
