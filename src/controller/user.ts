// import express from "express";
// import bodyParser from "body-parser";
// import {validationResult} from "express-validator";
// import fs from "fs";
// import {v4 as uuid4} from "uuid";
// import * as dalFunctions from "../dall";
// import bcrypt from "bcryptjs";
// import { error } from "console";

// interface user{
//     id?: string
//     userName?: string,
//     password?: string
// }
// export async function signUp(req: Request,res: Response){
//     const newuser:user = req.body;
//     console.log(user);
//     let result = validationResult(req);
//     if(!result.isEmpty){res.status(400).json({error: result.array()});
//         return}

//     user.id = uuid4()
//     user.password = await bcrypt.hash(user.password, 6);
//     console.log("add user"+ user);
//     addUser(user, ()=>{
//         res.status(200).json(user)
//     })

//  }
