import React from "react";
import { books } from "../constants/mockData";
import BookCards from "../components/BookCards";

function Books() {
  return (
    <div>
      {books.map((book) => (
        <BookCards key={book.id} data={book}/>
      ))}
    </div>
  );
}

export default Books;
