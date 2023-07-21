import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-content items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sum_logo" className="w-28 object-contain" />
      </nav>
      <button
        type="button"
        onClick={() =>
          window.open("https://github.com/AlbertStoykov/SummarAIse")
        }
        className="black_btn"
      >
        GitHub
      </button>
      <h1 className="head_text">
        <span className="orange_gradient">ChatGPT</span> Article Summarizer
      </h1>
      <h2 className="desc">
        Tired of reading lenghty articles where 90% of the text if fluff? The
        SummarAIse encapsulator is here to help!
      </h2>
    </header>
  );
};

export default Hero;
