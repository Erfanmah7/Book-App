import React from "react";
import { IoIosHeart } from "react-icons/io";

function BookCards({ data: { author, language, image, title, pages } }) {
  return (
    <div>
      <IoIosHeart />
    </div>
  );
}

export default BookCards;
