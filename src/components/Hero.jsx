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
    </header>
  );
};

export default Hero;
