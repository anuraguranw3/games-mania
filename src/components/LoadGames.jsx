import GameCard from "./GameCard";
import GameNotFound from "./GameNotFound";
import Loading from "./Loading";


const LoadGames = ({ isLoading, games }) => {
  return (
    <>
      {
        isLoading ? <Loading />
          : (games.length === 0) ? <GameNotFound />
            : <div className="w-full columns-1 gap-0 p-4 sm:columns-2 lg:columns-3 xl:columns-4">
              {
                games.map((game) => <GameCard key={game.id} id={game.id} name={game.name} backgroundImage={game.background_image} slug={game.slug} genres={game.genres} />)
              }
            </div>
      }
    </>
  );
};

export default LoadGames;