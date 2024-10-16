import React from "react";
import myMeme from "../memesData";

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = React.useState(myMeme);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage() {
    const id =
      Math.floor(Math.random() * (allMemeImages.data.memes.length - 1)) + 1;
    const meme = allMemeImages.data.memes[id];
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: meme.url,
      };
    });
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

      <img className="meme--image" src={meme.randomImage} alt="Meme"></img>
    </main>
  );
}
