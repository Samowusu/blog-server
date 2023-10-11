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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const http_status_codes_1 = require("http-status-codes");
const post_1 = require("../services/post");
const getAllPostsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const posts = yield post_1.PostService.getAllPostsByUser(userId);
    res.status(http_status_codes_1.StatusCodes.OK).json({ posts, count: posts.length });
});
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const { id } = req.params;
    const post = yield post_1.PostService.getPost(userId, id);
    res.status(http_status_codes_1.StatusCodes.OK).json({ post });
});
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const { post } = req.body;
    const createdPost = yield post_1.PostService.createPost(userId, post);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ post: createdPost });
});
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const { id } = req.params;
    const { post } = req.body;
    const updatedPost = yield post_1.PostService.updatePost(userId, id, post);
    res.status(http_status_codes_1.StatusCodes.OK).json({ post: updatedPost });
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const { id } = req.params;
    const deletedPost = yield post_1.PostService.deletePost(userId, id);
    res.status(http_status_codes_1.StatusCodes.OK).json({ post: deletedPost });
});
exports.PostController = {
    getAllPostsByUser,
    getPost,
    createPost,
    updatePost,
    deletePost,
};
