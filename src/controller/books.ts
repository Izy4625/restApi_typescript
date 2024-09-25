
import express, {Request, Response} from "express"
import {v4 as random} from "uuid"
import {Books, Book,UnitBook,OpenLibraryResponse} from "../books.interface";
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import https from 'https';
import { addBook } from "../dall";
import { UnitUser } from "../users.interface";



// Define an Axios request configuration type that includes httpsAgent
const axiosConfig: AxiosRequestConfig = {
  httpsAgent: new https.Agent({
    rejectUnauthorized: false // Disable SSL verification (for development only)
  })
};
  
// Function to get data from an API
export async function getBookByName(req :Request,res:Response):Promise<UnitBook| undefined>{
    const {id,bookName} = req.body
    console.log(id);
    console.log(bookName);
  try {
    const response = await axios.get<OpenLibraryResponse>(`https://openlibrary.org/search.json?title=${bookName}`, axiosConfig);
    const newBook: UnitBook = response.data.docs[0]
    // console.log(newBook)
    const finalbook: UnitBook ={
        id : random(),
        author_name: newBook.author_name,
        language: newBook.language,
        title: newBook.title
    }
    
    
   
    // console.log(finalbook);
    const newUser: UnitUser | null = await addBook(id,finalbook)
    if(newUser){
        res.status(200).json(newUser)
    }
    else{
        res.status(404).json("cant,find the user")
    }
    return finalbook;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Axios error:', error);
    } else {
      console.error('Unexpected error:', error);
    }
  }
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