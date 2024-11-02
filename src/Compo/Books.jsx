import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {

const [books, setBooks] = useState([]) ;

useEffect( () => {
    fetch('./booksData.json')
    .then(res=>res.json())
    .then(data=>setBooks(data))
} , [] )

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Books</h1>
<div className="md:grid grid-cols-3 gap-8 py-20">
    {
        books.map( book => <Book book={book} key={book.bookId}></Book> )
    }
</div>
        </div>
    );
};

export default Books;