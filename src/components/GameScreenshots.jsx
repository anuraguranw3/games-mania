import { useState } from "react";
import Loading from "./Loading";

const GameScreenshots = ({ gameScreenshots, screenshotsLoading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? gameScreenshots.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === gameScreenshots.length - 1 ? 0 : prevIndex + 1));
  };

  if (screenshotsLoading) {
    return <div className="p-3">Loading screenshots...</div>;
  }

  if (!gameScreenshots || gameScreenshots.length === 0) {
    return <div className="">No screenshots available.</div>;
  }

  return (
    <div className="mx-auto">
      <div className="relative">
        <img
          src={gameScreenshots[currentIndex].image}
          alt={`Screenshot ${currentIndex + 1}`}
          className="w-full h-auto rounded-lg"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#60;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#62;
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {gameScreenshots.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-gray-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GameScreenshots;