import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Games from "./components/Games";
import Error from "./components/Error";
import { useContext, useRef } from "react";
import SearchedGames from "./components/SearchedGames";
import { GameContext } from "./context/GameContext";
import GameDetails from "./components/GameDetails";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const { searchBarActive } = useContext(GameContext);

  return (
    <div className={`h-full w-full 2xl:w-[1500px]`}>
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

