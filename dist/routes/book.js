"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = require("../controller/books");
const express_1 = __importDefault(require("express"));
const bookRouter = express_1.default.Router();
bookRouter.post("/book", books_1.getBookByName);
exports.default = bookRouter;
