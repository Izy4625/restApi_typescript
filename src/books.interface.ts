export interface Book {
    author_name: string,
    language: string,
    title: string

}
export interface UnitBook extends Book{
    id: string
}
export interface Books {
    [key: string] : UnitBook
}