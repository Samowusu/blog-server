"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = require("../controllers/post");
const router = express_1.default.Router();
router
    .route("/")
    .post(post_1.PostController.createPost)
    .get(post_1.PostController.getAllPostsByUser);
router
    .route("/:id")
    .get(post_1.PostController.getPost)
    .delete(post_1.PostController.deletePost)
    .patch(post_1.PostController.updatePost);
exports.default = router;
