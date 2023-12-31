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
exports.AuthController = void 0;
const http_status_codes_1 = require("http-status-codes");
const auth_1 = require("../services/auth");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const registeredUser = yield auth_1.AuthService.registerUser(userData);
    res.status(http_status_codes_1.StatusCodes.OK).json({ status: "success", user: registeredUser });
});
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginData = req.body;
    const loggedInUser = yield auth_1.AuthService.loginUser(loginData);
    res.status(http_status_codes_1.StatusCodes.OK).json({ status: "success", user: loggedInUser });
});
exports.AuthController = {
    registerUser,
    loginUser,
};
