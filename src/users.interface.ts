import { UnitBook } from "./books.interface"

export interface User {
    username? : string,  
    email?: string,
    password : string
    bookList: UnitBook[]
}

export interface UnitUser extends User {
    id : string
}

export interface Users {
    [key : string] : UnitUser
}