import { getBookByName } from "../controller/books";

import express from "express";

const bookRouter = express.Router()

bookRouter.post("/book", getBookByName)

export default bookRouter
   
