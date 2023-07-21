import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-content items-center flex-col">
      <nav className="flex justify-between items-center flex-col">
        <img src={logo} alt="sum_logo" className="w-28 object-contain" />
      </nav>
      <button
        type="button"
        onClick={() =>
          window.open("https://github.com/AlbertStoykov/SummarAIse")
        }
      ></button>
    </header>
  );
};

export default Hero;
