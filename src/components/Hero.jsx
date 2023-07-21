import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-content items-center flex-col">
      <nav className="flex justify-between w-full mb-10">
        <img src={logo} alt="sum_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/AlbertStoykov/SummarAIse")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        <span className="orange_gradient">SummarAIse</span>
        <br></br>Article Summarizer based on ChatGPT
      </h1>
      <h2 className="desc">
        Tired of reading lenghty articles where 90% of the text is fluff? The{" "}
        <span className="orange_gradient">SummarAIse</span> encapsulator is here
        to help!
      </h2>
    </header>
  );
};

export default Hero;
