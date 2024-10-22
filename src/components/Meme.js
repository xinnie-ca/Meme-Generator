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

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
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
              name="topText"
              onChange={handleChange}
              value={meme.topText}
            />
          </div>
          <div>
            <label htmlFor="bottom--text">Bottom Text</label>
            <input
              id="bottom--text"
              type="text"
              placeholder="and take my money"
              className="form--input"
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </div>
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
