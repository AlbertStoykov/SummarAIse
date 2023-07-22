import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <>
      <header className="w-full flex justify-content items-center flex-col">
        <nav className="flex justify-between w-full mb-10 pt-3">
          <img src={logo} alt="sum_logo" className="w-[25%] object-contain" />
        </nav>
        <h1 className="head_text">
          <span className="orange_gradient">SummarAIse</span>
          <br></br>Article Summarizer powered by AI
        </h1>
        <h2 className="desc">
          Tired of reading lenghty articles where 90% of the text is fluff? The{" "}
          <span className="orange_gradient">SummarAIse</span> encapsulator is
          here to help!
        </h2>
      </header>

      <footer className="fixed bottom-0 left-0 w-full bg-white rounded-lg bg-transparent">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between"></div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-lg text-black-500 sm:text-center dark:text-black-400">
            © 2023
            <a href="https://flowbite.com/" className="hover:underline">
              SummarAIse™. All Rights Reserved.
            </a>
            <button
              type="button"
              onClick={() =>
                window.open("https://github.com/AlbertStoykov/SummarAIse")
              }
              className="black_btn m-5"
            >
              GitHub
            </button>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Hero;
