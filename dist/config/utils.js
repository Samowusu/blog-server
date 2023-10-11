"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_MESSAGE = exports.emailRegex = void 0;
exports.emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//REQUIRED ERROR MESSAGES
exports.ERROR_MESSAGE = {
    name: "Please provide your name",
    password: "Please provide a password",
    email: "Please provide an email",
    validEmail: "Please provide a valid email",
    user: "Please provide a user ID",
};
