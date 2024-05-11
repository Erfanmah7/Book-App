import React, { useState } from "react";
import { books as bookdata } from "../constants/mockData";
import BookCards from "../components/BookCards";
import Favorites from "../components/Favorites";
import Search from "../components/Search";
import styles from "../style/books.module.css";

function Books() {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);
  const [books, setBooks] = useState(bookdata);

  const searchHandler = () => {
    if (search) {
      const newsearch = bookdata.filter((b) =>
        b.title.toLowerCase().includes(search)
      );
      setBooks(newsearch);
    } else {
      setBooks(bookdata);
    }
  };

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
    <>
      {" "}
      <Search
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCards key={book.id} data={book} likedHandler={likedHandler} />
          ))}
        </div>
        {/* ! تبدیل مقدار به بولین با */}
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorite</h4>
            {liked.map((like) => (
              <Favorites key={like.id} data={like} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
