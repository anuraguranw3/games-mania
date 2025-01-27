import { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../context/GameContext";
import { FaStar } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { FaCrown } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";
import Toggle from "./Toggle";
import LoadGames from "./LoadGames";
import { getLast30Days, getThisWeek, getNextWeek } from "./dateUtils";

const Games = () => {
  const [fade, setFade] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { games, isLoading, activeToggle, setActiveToggle } = useContext(GameContext);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleClick = (toggleName) => {
    setActiveToggle(toggleName);
    if (window.matchMedia("(max-width: 767px)").matches) {
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setFade(true);

    return () => {
      setFade(false);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div className={`App ${fade ? 'fade-in' : 'fade-out'} w-full flex flex-col md:flex-row`}>
        <RiMenu2Fill className={`${isOpen && "invisible"} text-4xl font-bold ml-5 sticky top-20 z-10 cursor-pointer md:hidden`} onClick={() => toggleMenu()} />
        <div ref={menuRef} className={`w-[65%] rounded-tr-lg rounded-br-lg bg-white/10 backdrop-blur-lg fixed top-0 left-0  h-full p-4 whitespace-nowrap z-30 transition-transform ease-in-out duration-300  ${isOpen ? "translate-x-0 overflow-auto scrollable-container" : "-translate-x-full"} md:bg-transparent md:sticky md:top-0 md:translate-x-0 md:w-52`}>
          <RiCloseLargeLine className={`${isOpen ? "visible" : "invisible"} text-red-600 text-5xl my-5 md:hidden`} onClick={() => toggleMenu()} />
          <h3 className="text-2xl font-bold">New Releases</h3>
          <ul className="text-lg">
            <Toggle
              icon={<FaStar />}
              text="Last 30 days"
              queries={[{ query: "dates", queryValue: getLast30Days() }]}
              isActive={activeToggle === "Last 30 days"}
              handleToggleClick={handleToggleClick}
            />
            <Toggle
              icon={<FaFire />}
              text="This week"
              queries={[{ query: "dates", queryValue: getThisWeek() }]}
              isActive={activeToggle === "This week"}
              handleToggleClick={handleToggleClick}
            />
            <Toggle
              icon={<FaForward />}
              text="Next week"
              queries={[{ query: "dates", queryValue: getNextWeek() }]}
              isActive={activeToggle === "Next week"}
              handleToggleClick={handleToggleClick}
            />
          </ul>
          <h3 className="text-2xl font-bold mt-2">Top</h3>
          <ul className="text-lg">
            <Toggle
              icon={<FaTrophy />}
              text="Best of the year"
              queries={[
                {
                  query: "dates", queryValue: "2025-01-01,2025-12-31"
                },
                {
                  query: "ordering", queryValue: "-rating"
                }
              ]}
              isActive={activeToggle === "Best of the year"}
              handleToggleClick={handleToggleClick}
            />

            <Toggle
              icon={<IoStatsChart />}
              text="Popular in 2025"
              queries={[
                {
                  query: "dates", queryValue: "2025-01-01,2025-12-31"
                },
                {
                  query: "ordering", queryValue: "-added"
                }
              ]}
              isActive={activeToggle === "Popular in 2025"}
              handleToggleClick={handleToggleClick}
            />

            <Toggle
              icon={<FaCrown />}
              text="All time top"
              queries={[{ query: "ordering", queryValue: "-rating" }]}
              isActive={activeToggle === "All time top"}
              handleToggleClick={handleToggleClick}
            />
          </ul>
          <h3 className="text-2xl font-bold mt-2">Genres</h3>
          <ul className="text-lg">
            <Toggle
              icon={<FaPuzzlePiece />}
              text="Puzzle"
              queries={[{ query: "genres", queryValue: "puzzle" }]}
              isActive={activeToggle === "Puzzle"}
              handleToggleClick={handleToggleClick}
            />
            <Toggle
              icon={<FaGun />}
              text="Shooter"
              queries={[{ query: "genres", queryValue: "shooter" }]}
              isActive={activeToggle === "Shooter"}
              handleToggleClick={handleToggleClick}
            />
            <Toggle
              icon={<FaRegCircle />}
              text="Indie"
              queries={[{ query: "genres", queryValue: "indie" }]}
              isActive={activeToggle === "Indie"}
              handleToggleClick={handleToggleClick}
            />
          </ul>
        </div>
        <div className="">
          <LoadGames isLoading={isLoading} games={games} />
        </div>
      </div>
    </>
  );
};

export default Games;
