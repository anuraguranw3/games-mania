import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Games from "./components/Games";
import Error from "./components/Error";
import { useContext, useEffect, useState } from "react";
import SearchedGames from "./components/SearchedGames";
import { GameContext } from "./context/GameContext";
import GameDetails from "./components/GameDetails";

const App = () => {

  const [fade, setFade] = useState(false);
  const { searchBarActive } = useContext(GameContext);

  useEffect(() => {
    setFade(true);

    return () => {
      setFade(false);
    };
  }, []);

  return (
    <div className={`App ${fade ? 'fade-in' : 'fade-out'} h-full w-full 2xl:w-[1500px]`}>
      <div className="w-[90vw] flex flex-col items-center relative z-10 2xl:w-full">
        <Header />
        <Routes future={{ relativeSplatPath: true }}>
          <Route path="/" element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="game/:id" element={<GameDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {
          searchBarActive && <SearchedGames />
        }
      </div>
    </div>
  );
};

export default App;

