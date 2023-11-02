import { useState } from "react";
import "./index.css";
import Header from "./meme-generator/Header";
import Meme from "./meme-generator/Meme";

function App() {
  return (
    <div className="container">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
