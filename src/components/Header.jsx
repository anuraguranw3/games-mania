import { IoIosSearch } from "react-icons/io";
import logo from "../assets/games-mania-logo2.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Header = () => {
  const { searchTerm, setSearchTerm, searchGames, setSearchBarActive } = useContext(GameContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    searchGames(value);
    if (value === "") {
      setSearchBarActive(false);
    }
    else {
      setSearchBarActive(true);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="w-[90%] my-5 p-1 flex items-center justify-evenly bg-white/30 rounded-md backdrop-blur-lg cursor-pointer lg:w-[900px] sticky top-3 z-20">
      <img
        onClick={() => navigate("/")}
        className="w-12 h-10 rounded"
        src={logo}
        alt="Games Mania Logo" />
      <div className="sm:w-[50%] bg-white m-2 ml-3 flex items-center justify-center rounded">
        <label htmlFor="search" className="text-2xl p-1 text-black"><IoIosSearch /></label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Games"
          className="w-[80%] text-black border-none outline-none indent-1"
        />
      </div>
    </div>
  );
};

export default Header;