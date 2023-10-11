"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordValidator = exports.loginUserValidator = exports.createUserValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createUserValidator = joi_1.default.object({
    name: joi_1.default.string().min(3).max(50).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
exports.loginUserValidator = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
exports.resetPasswordValidator = joi_1.default.object({
    password: joi_1.default.string().required(),
});
