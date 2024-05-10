import React, { useState } from "react";
import { IoIosHeart } from "react-icons/io";
import styles from "../style/bookcards.module.css";

function BookCards({ data, likedHandler }) {
  const { author, language, image, title, pages } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    setLike((like) => !like);
    likedHandler(data, like);
  };

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{author}</p>

        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <IoIosHeart color={like ? "red" : "white"} fontSize="2rem" />
      </button>{" "}
    </div>
  );
}

export default BookCards;
