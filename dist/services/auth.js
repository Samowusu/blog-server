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
exports.AuthService = void 0;
const errors_1 = require("../errors");
const User_1 = __importDefault(require("../models/User"));
const user_1 = require("../schema-validators/user");
const registerUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = user_1.createUserValidator.validate(userData);
    if (error) {
        throw new Error(error.details[0].message);
    }
    const newUser = yield User_1.default.create(userData);
    const token = newUser.createJWT();
    return { name: newUser.name, token };
});
const loginUser = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = user_1.loginUserValidator.validate(loginData);
    if (error) {
        throw new Error(error.details[0].message);
    }
    const user = yield User_1.default.findOne({ email: value.email });
    if (!user) {
        throw new errors_1.UnauthenticatedError("Invalid Email");
    }
    const isPasswordCorrect = yield user.comparePassword(value.password);
    if (!isPasswordCorrect) {
        throw new errors_1.UnauthenticatedError("Invalid Password");
    }
    const token = user.createJWT();
    return { name: user.name, token };
});
exports.AuthService = {
    registerUser,
    loginUser,
};
