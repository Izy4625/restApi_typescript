export interface Book {
    author_name?: string[] |undefined
    language?: string[]| undefined
    title?: string| undefined

}
export interface UnitBook extends Book{
    id?: string
}
export interface Books {
    [key: string] : UnitBook
}
export interface OpenLibraryDoc {
    author_alternative_name?: string[]; // שמות חלופיים של מחברים
    author_key?: string[]; // מפתחות מחברים
    author_name?: string[]; // שמות מחברים
    contributor?: string[]; // תורמים
    cover_edition_key?: string; // מפתח גרסה עם עטיפה
    cover_i?: number; // מפתח כיסוי
    ddc?: string[]; // מספרי DDC
    ebook_access?: string; // גישה לאי-בוק
    ebook_count_i?: number; // מספר האי-בוקים
    edition_count?: number; // מספר ההוצאות
    edition_key?: string[]; // מפתחות הוצאה
    first_publish_year?: number; // שנה ראשונה
    format?: string[]; // פורמטים
    has_fulltext?: boolean; // האם יש טקסט מלא
    ia?: string[]; // מזהי אינטרנט ארכיב
    ia_collection?: string[]; // אוספי אינטרנט ארכיב
    isbn?: string[]; // מספרי ISBN
    key?: string; // מפתח הספר
    language?: string[]; // שפות
    last_modified_i?: number; // תאריך עדכון אחרון
    number_of_pages_median?: number; // מספר עמודים ממוצע
    oclc?: string[]; // מזהי OCLC
    osp_count?: number; // מספר OSP
    printdisabled_s?: string; // מפתח לספרים שאינם מודפסים
    public_scan_b?: boolean; // האם יש סריקות ציבוריות
    publish_date?: string[]; // תאריכי פרסום
    publish_place?: string[]; // מקומות פרסום
    publish_year?: number[]; // שנים
    publisher?: string[]; // הוצאות לאור
    seed?: string[]; // זרעים
    title: string; // כותרת הספר
    title_suggest?: string; // הצעה לכותרת
    title_sort?: string; // מיון לפי כותרת
    type?: string; // סוג
    id_amazon?: string[]; // מזהים מאמזון
    id_google?: string[]; // מזהים מגוגל
    id_librarything?: string[]; // מזהים מ-LibraryThing
    subject?: string[]; // נושאים
    person?: string[]; // דמויות
    ratings_average?: number; // ממוצע דירוגים
    ratings_sortable?: number; // דירוגים ניתנים למיון
    ratings_count?: number; // מספר דירוגים
    ratings_count_1?: number; // מספר דירוגים 1
    ratings_count_2?: number; // מספר דירוגים 2
    ratings_count_3?: number; // מספר דירוגים 3
    ratings_count_4?: number; // מספר דירוגים 4
    ratings_count_5?: number; // מספר דירוגים 5
    readinglog_count?: number; // מספר יומני קריאה
    want_to_read_count?: number; // מספר אנשים שרוצים לקרוא
    currently_reading_count?: number; // מספר אנשים שקוראים כרגע
    already_read_count?: number; // מספר אנשים שקראו
    publisher_facet?: string[]; // פן של הוצאות לאור
    person_key?: string[]; // מפתחות דמויות
    person_facet?: string[]; // פן דמויות
    subject_facet?: string[]; // פן נושאים
    version: number; // גרסה
    author_facet?: string[]; // פן מחברים
    subject_key?: string[]; // מפתחות נושאים
    ddc_sort?: string; // מיון DDC
}
export interface OpenLibraryResponse {
    numFound: number; // מספר התוצאות
    start: number; // התחלה
    numFoundExact: boolean; // האם המספר מדויק
    docs: OpenLibraryDoc[]; // רשימת הספרים
}