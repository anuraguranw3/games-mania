import { FaArrowRightLong } from "react-icons/fa6";
import gitHubIcon from "../assets/git_icon.png";
import rawgApiIcon from "../assets/favicon.png";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="w-[95%] h-auto m-auto p-3 mt-8 flex flex-col items-center justify-center gap-7">
      <div className="w-[98%] h-auto p-4 flex flex-col text-center gap-4 bg-white/30 rounded-2xl backdrop-blur-lg">
        <h2 className="text-xl font-extrabold">Games Mania</h2>
        <p className="text-lg font-semibold">is a game discovery website powered by the RAWG API. It allows users to explore a vast collection of games, including details, images, and game information, but please note that this is a non-commercial site. Games Mania is not an official game store or marketplace, and no transactions can be made on this site. This site is created for informational purposes only and is not affiliated with any game developers or distributors. All game data is provided by the RAWG API and is not for sale on this platform.</p>
      </div>

      <div className="py-2 px-4 bg-white/30 rounded-xl backdrop-blur-lg">
        <div
          onClick={() => navigate("games")}
          className="py-2 px-4 text-lg font-normal bg-white rounded-xl text-black flex justify-center items-center gap-2 cursor-pointer hover:scale-105 transform-transition duration-300 ease-in-out"
        >Browse games <span className="animate-arrow"><FaArrowRightLong /></span>
        </div>
      </div>

      <div className="py-3 px-4 mb-16 flex text-black text-center items-center justify-center gap-4 whitespace-nowrap bg-white/30 rounded-2xl backdrop-blur-lg">
        <div className="bg-white py-2 px-4 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-cyan-200">
          <img
            className="w-7"
            src={gitHubIcon}
            alt="GitHub logo"
          />
          <a href="https://github.com/anuraguranw3" target="_blank" rel="noopener noreferrer">anuraguranw3</a>
        </div>

        <div className="bg-white py-2 px-4 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-cyan-200">
          <img
            className="w-6"
            src={rawgApiIcon}
            alt="GitHub logo"
          />
          <a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer">RAWG API</a>
        </div>
      </div>
    </div>
  );
};

export default Home;