import React from "react";
import styles from "../style/layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="#">Erfanmah7</a> | React Project
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Made with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
