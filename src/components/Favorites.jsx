import React from "react";
import styles from "../style/favarites.module.css";

function Favorites({ data: { title, image } }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Favorites;
