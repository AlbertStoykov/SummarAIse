import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <>
      <header className="w-full flex justify-content items-center flex-col">
        <nav className="flex justify-between w-full mb-10 pt-3">
          <img src={logo} alt="sum_logo" className="w-[30%] object-contain" />
        </nav>
        <h1 className="head_text">
          <i>SummarAIse</i>
          <br></br>Article Summarizer powered by AI
        </h1>
        <h2 className="desc">
          <strong>
            Tired of reading lenghty articles where 90% of the text is fluff?
            The SummarAIse encapsulator is here to help!
          </strong>
        </h2>
      </header>

      <footer className="fixed bottom-0 left-0 w-full text-white">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-lg text-black-500 sm:text-center dark:text-black-400">
            © 2023 SummarAIse
            {/* Github Button */}
            <a
              href="https://github.com/AlbertStoykov/SummarAIse"
              className="relative inline-block text-lg group m-12"
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
            <a
              href="https://github.com/AlbertStoykov/SummarAIse"
              className="relative inline-block text-lg group m-12"
            >
              <span className="relative z-10 block px-10 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>

                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                {/*  */}
                <span className="absolute left-0 block w-full h-0 transition-all bg-white-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-10 h-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 5 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                {/*  */}
                <span className="relative">Go</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </span>
          {/* Github Button */}
        </div>
      </footer>
    </>
  );
};

export default Hero;
