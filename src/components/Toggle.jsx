import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Toggle = ({ icon, text, queries, isActive, handleToggleClick}) => {
  const { fetchGames } = useContext(GameContext);
  return (
    <li className="cursor-pointer my-1 group" onClick={() => {
      fetchGames(queries);
      handleToggleClick(text);
    }}>
      <p className="flex items-center"><span className={`${isActive ? "bg-white text-black" : ""} p-1 m-1 text-2xl rounded bg-gray-800 group-hover:bg-white group-hover:text-black`}>{icon}</span>{text}</p>
    </li>
  );
};

export default Toggle;