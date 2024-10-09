import React from "react";

export default function NavBar() {
  return (
    <header className="header">
      <img
        className="header--image"
        src="../images/troll-face.png"
        alt="troll-face"
      ></img>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React course - project 3</h4>
    </header>
  );
}
