import React from "react";
import myMeme from "../memesData";
export default function Meme() {
  function handleClick() {
    const id = Math.floor(Math.random() * (myMeme.data.memes.length - 1)) + 1;
    const meme = myMeme.data.memes[id];
    const url = meme.url;
    return url;
  }

  return (
    <main>
      <div className="form">
        <div>
          <label htmlFor="top--text">Top Text</label>
          <input
            id="top--text"
            type="text"
            placeholder="Shut Up"
            className="form--input"
          />
        </div>
        <div>
          <label htmlFor="bottom--text">Bottom Text</label>
          <input
            id="bottom--text"
            type="text"
            placeholder="and take my money"
            className="form--input"
          />
        </div>
        <button className="form--button" onClick={handleClick}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
