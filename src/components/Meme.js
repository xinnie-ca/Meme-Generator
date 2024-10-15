import React from "react";
import myMeme from "../memesData";

export default function Meme() {
  const [image, setImage] = React.useState("");

  function getMemeImage() {
    const id = Math.floor(Math.random() * (myMeme.data.memes.length - 1)) + 1;
    const meme = myMeme.data.memes[id];
    const url = meme.url;
    setImage(url);
  }

  return (
    <main>
      <div className="form">
        <div className="form--box">
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
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <img className="meme--image" src={image} alt="Meme"></img>
    </main>
  );
}
