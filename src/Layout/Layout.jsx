import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Book App</h1>
        <p>
          <a href="#">Erfanmah7</a> | React Project
        </p>
      </header>
      {children}
      <footer>
        <p>Made with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
