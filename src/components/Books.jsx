import React, { useState } from "react";
import { books } from "../constants/mockData";
import BookCards from "../components/BookCards";
import Favorites from "../components/Favorites";

function Books() {
  const [liked, setLiked] = useState([]);

  const likedHandler = (book, status) => {
    //اگر لایک رو برداشت
    if (status) {
      //اون آیدی هایی رو که با آیدی لایک شده ها برابر نیستن و برام لیست کن
      const newlist = liked.filter((i) => i.id !== book.id);
      setLiked(newlist);
    } else {
      //اگر لایک کرد
      setLiked((liked) => [...liked, book]);
    }
  };

  return (
    <div>
      <div>
        {books.map((book) => (
          <BookCards key={book.id} data={book} likedHandler={likedHandler} />
        ))}
      </div>

      {!!liked.length && (
        <div>
          {liked.map((i) => (
            <Favorites key={i.id} data={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
