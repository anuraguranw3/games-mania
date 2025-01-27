import { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../context/GameContext";

const SearchedGamesCard = ({ name, backgroundImage, slug, id }) => {
  const {setSearchBarActive} = useContext(GameContext);
  return (
    <Link to={`/game/${id}`}>
    <div onClick={() => setSearchBarActive(false)} className="p-1 flex gap-3 rounded-lg bg-black/50 backdrop-blur-lg hover:scale-[1.01] transform transition duration-300 ease-in-out cursor-pointer">
      <img className="w-20 h-20 rounded-lg" src={backgroundImage} alt={slug} />
      <h3 className="font-extrabold">{name}</h3>
    </div>
    </Link>
  );
};

export default SearchedGamesCard;