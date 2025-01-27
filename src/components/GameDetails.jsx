import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import Loading from "./Loading";
import GameNotFound from "./GameNotFound";
import GameScreenshots from "./GameScreenshots";


const GameDetails = () => {

  const { id } = useParams();
  const { gameDetails, detailsLoading, fetchGameDetails, gameScreenshots, screenshotsLoading, fetchGameScreenshots } = useContext(GameContext);

  useEffect(() => {
    fetchGameDetails(id);
    fetchGameScreenshots(id);
  }, [id]);

  return (
    <div>
      {
        detailsLoading ? <Loading />
          : (gameDetails === null) ? <GameNotFound />
            : <div className="w-full flex flex-col items-center">
              <h3 className="text-4xl p-3 mb-5">{gameDetails.name}</h3>
              <div className="w-full md:flex md:flex-col">
                <div className="w-full relative flex flex-col md:flex md:flex-row">
                  <div className="md:w-1/2">
                    <GameScreenshots gameScreenshots={gameScreenshots} screenshotsLoading={screenshotsLoading} />
                  </div>
                  <div className="md:ml-5 md:w-1/2">
                    <h3 className="text-lg mt-4 text-gray-400">Publisher(s)</h3>
                    <div>
                      {
                        gameDetails.publishers.length === 0 ? <h3 className="text-gray-400">Publisher not found</h3>
                        : gameDetails.publishers.map((publisher) => <p className="text-xl" key={publisher.id}>{publisher.name}</p>)
                      }
                    </div>
                    <h3 className="text-lg mt-3 text-gray-400">Released: {gameDetails.released}</h3>
                    <h3 className="text-xl mt-5 mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-3">
                      {
                        gameDetails.tags.length === 0 ? <h3 className="text-gray-400">No tags available</h3>
                          : gameDetails.tags.map((tag) => <p className="text-black text-base rounded-lg p-2 bg-white md:text-lg" key={tag.id}>{tag.name}</p>)
                      }
                    </div>
                  </div>
                </div>
                <h3 className="text-xl mt-5 mb-2 text-center">Description</h3>
                <div
                  className="scrollable-container w-full rounded-lg bg-gray-900 pb-10 text-center overflow-y-auto"
                  dangerouslySetInnerHTML={{ __html: gameDetails.description }}
                />

              </div>

            </div>
      }
    </div>
  );
  // 3498 game id
  // 58175 god of war id 
};

export default GameDetails;