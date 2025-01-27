import { useContext, useEffect, useRef } from "react";
import { GameContext } from "../context/GameContext";
import SearchedGamesCard from "./SearchedGamesCard";
import Loading from "./Loading";
import GameNotFound from "./GameNotFound";


const SearchedGames = () => {
  const { searchedGames, searchLoading, setSearchBarActive } = useContext(GameContext);
  const searchedGamesRef = useRef(null);

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (searchedGamesRef.current && !searchedGamesRef.current.contains(event.target)) {
        setSearchBarActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [searchedGamesRef]);

  return (
    <div ref={searchedGamesRef} className="h-[70%] w-[85%] p-3 rounded-xl fixed top-20 mx-auto z-40 overflow-y-auto bg-white/60 backdrop-blur-lg scrollable-container">
      {
        searchLoading ? <Loading />
          : (searchedGames.length === 0) ? <GameNotFound />
            :
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold">Games: {searchedGames.length}</h3>
              {
                searchedGames.map((game) => <SearchedGamesCard key={game.id} id={game.id} name={game.name} backgroundImage={game.background_image} slug={game.slug} />)
              }
            </div>
      }
    </div>
  );
};

export default SearchedGames;