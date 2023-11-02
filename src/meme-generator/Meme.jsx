import { useState, useEffect } from "react";

export default function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);
  const [show, setShow] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleShow() {
    setShow((prev) => !show);
  }
  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const randomMeme = allMemes[randomIndex].url;
    setMeme((prev) => ({ ...prev, randomImage: randomMeme }));
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <main>
      <div className="form">
        <div className="form-input">
          <input
            type="text"
            className="form-input"
            placeholder="Top text"
            value={meme.topText}
            onChange={handleChange}
            name="topText"
          />

          <input
            type="text"
            className="form-input"
            placeholder="Bottom text"
            value={meme.bottomText}
            onChange={handleChange}
            name="bottomText"
          />
        </div>
        <button type="submit" className="form-button" onClick={getRandomMeme}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme-image">
        <img src={meme.randomImage} alt="random meme image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>

      <div>
        {show && <button onClick={handleShow}>Toggle WindowTracker</button>}
        <h1>Window Width : {windowWidth}</h1>
      </div>
    </main>
  );
}
