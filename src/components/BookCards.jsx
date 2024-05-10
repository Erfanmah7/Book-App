import React, { useState } from "react";
import { IoIosHeart } from "react-icons/io";

function BookCards({ data: { author, language, image, title, pages } }) {
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    setLike((like) => !like);
  };

  return (
    <div>
      <img src={image} alt={title} />
      <div>
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
