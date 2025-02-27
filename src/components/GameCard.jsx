import { Link } from "react-router-dom";

const GameCard = ({ name, backgroundImage, slug, genres, id }) => {
  return (
    <Link to={`/game/${id}`}>
      <div className="w-full bg-green-500 overflow-hidden px-2 py-[10px] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="p-[5px] rounded-xl bg-white/20 backdrop-blur-lg">
          <div>
            <img className="rounded-lg" src={backgroundImage} alt={slug} />
          </div>
          <div>
            <h2 className="text-lg pl-2 pt-2 pb-3 font-bold">{name}</h2>
            <div className="mx-auto flex flex-wrap">
              {
                genres.map((genre => <span className="p-2" key={genre.id}>{genre.name}</span>))
              }
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default GameCard;