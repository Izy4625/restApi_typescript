"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getBookByName = getBookByName;
const uuid_1 = require("uuid");
const axios_1 = __importStar(require("axios"));
const https_1 = __importDefault(require("https"));
const dall_1 = require("../dall");
// Define an Axios request configuration type that includes httpsAgent
const axiosConfig = {
    httpsAgent: new https_1.default.Agent({
        rejectUnauthorized: false // Disable SSL verification (for development only)
    })
};
// Function to get data from an API
function getBookByName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, bookName } = req.body;
        console.log(id);
        console.log(bookName);
        try {
            const response = yield axios_1.default.get(`https://openlibrary.org/search.json?title=${bookName}`, axiosConfig);
            const newBook = response.data.docs[0];
            // console.log(newBook)
            const finalbook = {
                id: (0, uuid_1.v4)(),
                author_name: newBook.author_name,
                language: newBook.language,
                title: newBook.title
            };
            // console.log(finalbook);
            const newUser = yield (0, dall_1.addBook)(id, finalbook);
            if (newUser) {
                res.status(200).json(newUser);
            }
            else {
                res.status(404).json("cant,find the user");
            }
            return finalbook;
        }
        catch (error) {
            if (error instanceof axios_1.AxiosError) {
                console.error('Axios error:', error);
            }
            else {
                console.error('Unexpected error:', error);
            }
        }
    });
}
// Run the fetchData function
// Create an Axios instance with custom configuration
// const axiosInstance = axios.create({
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false // Disable SSL verification (use this for development only)
//   })
// });
// Function to get data from an API
// async function fetchData() {
//   try {
//     const response = await axiosInstance.get('https://openlibrary.org/search.json?title=WW2');
//     console.log(response.data);
//   } catch (error) {
//     if (error) {
//       console.error('Axios error:', error);
//     } else {
//       console.error('Unexpected error:', error);
//     }
//   }
// }
// Run the fetchData function
// axios.get('https://openlibrary.org/search.json?title=WW2', { httpsAgent: agent })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));
// export async function getBookByName(req :Request,res:Response): Promise<UnitBook | undefined>{
//     const {bookid,bookName} = req.body
//     console.log(bookName);
//     try{
//     const data: OpenLibraryResponse  = await fetchData();
//     // const newdata: Data = JSON.parse(data)
//     let id = random()
//     const unitBook: UnitBook = {
//             id: id,
//             author_name: data.docs[0].author_name[0]
//             language: data.docs[0].language,
//             title: data.docs.title
//     }
//     res.status(200).json(unitBook)
//     console.log(unitBook);
//     return unitBook;
// }
//     catch(err){
//         console.log(err)
//     }
// }
