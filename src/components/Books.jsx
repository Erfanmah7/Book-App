import React from "react";
import { books } from "../constants/mockData";
import BookCards from "../components/BookCards";
import Favorites from "../components/Favorites";

function Books() {
  return (
    <>
      <div>
        {books.map((book) => (
          <BookCards key={book.id} data={book} />
        ))}
      </div>
      <div>
        <Favorites />
      </div>
    </>
  );
}

export default Books;
