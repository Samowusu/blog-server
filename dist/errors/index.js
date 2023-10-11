"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.BadRequestError = exports.UnauthenticatedError = exports.CustomAPIError = void 0;
var customApi_1 = require("./customApi");
Object.defineProperty(exports, "CustomAPIError", { enumerable: true, get: function () { return __importDefault(customApi_1).default; } });
var unauthenticated_1 = require("./unauthenticated");
Object.defineProperty(exports, "UnauthenticatedError", { enumerable: true, get: function () { return __importDefault(unauthenticated_1).default; } });
var badRequest_1 = require("./badRequest");
Object.defineProperty(exports, "BadRequestError", { enumerable: true, get: function () { return __importDefault(badRequest_1).default; } });
var notFound_1 = require("./notFound");
Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function () { return __importDefault(notFound_1).default; } });
