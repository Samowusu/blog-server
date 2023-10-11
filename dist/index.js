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
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
//MIDDLEWARE IMPORTS
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const notFound_1 = __importDefault(require("./middleware/notFound"));
const authentication_1 = __importDefault(require("./middleware/authentication"));
//ROUTES IMPORTS
const index_1 = require("./routes/index");
const connect_1 = __importDefault(require("./db/connect"));
// CONFIGURATIONS
dotenv_1.default.config();
const app = (0, express_1.default)();
const BASE_ROUTE = "/api/v1";
//MIDDLEWARES
app.use(express_1.default.json({ limit: "200mb" }));
app.use(express_1.default.urlencoded({ limit: "200mb", extended: true, parameterLimit: 50000 }));
app.use((0, helmet_1.default)());
//ROUTES
app.use(`${BASE_ROUTE}/auth`, index_1.AuthRoute);
app.use(`${BASE_ROUTE}/jobs`, authentication_1.default, index_1.PostRoute);
//ERROR HANDLER MIDDLEWARES
app.use(notFound_1.default);
app.use(errorHandler_1.default);
//START SERVER
const PORT = process.env.PORT || 5000;
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.default)(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`server is listening on port ${PORT}...`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
init();
