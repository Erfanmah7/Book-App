import React from "react";

function Favorites({ data: { title, image } }) {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Favorites;
