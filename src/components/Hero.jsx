import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className=" w-full flex justify-center  items-center flex-col">
      <nav className="flex justify-between w-full mb-1 pt-1">
        <img src={logo} alt="sum_logo" className="w-[30%] object-contain" />
        {/* Github Button */}
        <div className="w-1/5 max-w-screen-x1 mx-14 p-12 md:py-1">
          <a
            href="https://github.com/AlbertStoykov/SummarAIse"
            className="relative inline-block text-lg group m-12"
            target="_blank"
            rel="noreferrer"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">GitHub</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
        {/* Github Button */}
      </nav>
      <h1 className="head_text">
        <i>SummarAIse</i>
        <br></br>Article Summarizer powered by AI
      </h1>
      <h2 className="desc">
        <strong>
          Tired of reading lenghty articles where 90% of the text is fluff? The
          SummarAIse encapsulator is here to help!
        </strong>
      </h2>
    </header>
  );
};

export default Hero;
