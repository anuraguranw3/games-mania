import { useEffect, useState } from "react";
import { GameContext } from "./GameContext";

export const GameContextProvider = ({ children }) => {

  const [activeToggle, setActiveToggle] = useState(null);

  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchedGames, setSearchedGames] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBarActive, setSearchBarActive] = useState(false);

  const [gameDetails, setGameDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(true);
  const [detailsError, setDetailsError] = useState(null);

  const [gameScreenshots, setGameScreenshots] = useState([]);
  const [screenshotsLoading, setScreenshotsLoading] = useState(true);
  const [screenshotsError, setScreenshotsError] = useState(null);

  const fetchGames = (queries = []) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    setIsLoading(true);
    let url = `${apiUrl}?key=${apiKey}`;
    queries.forEach((query) => {
      url += `&${query.query}=${query.queryValue}`;
    });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        console.log(data.results);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchGames();
  }, []);

  const searchGames = (queryValue) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    setSearchLoading(true);
    let url = `${apiUrl}?key=${apiKey}`;
    url += `&search=${queryValue}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSearchedGames(data.results);
        console.log(data.results);
      })
      .catch((err) => {
        setSearchError(err);
        console.error(err);
      })
      .finally(() => setSearchLoading(false));
  };

  const fetchGameDetails = (id) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    setDetailsLoading(true);
    let url = `${apiUrl}/${id}?key=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGameDetails(data);
        console.log(data);
      })
      .catch((err) => {
        setDetailsError(err);
        console.error(err);
      })
      .finally(() => setDetailsLoading(false));
  };

  const fetchGameScreenshots = (id) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    setScreenshotsLoading(true);
    let url = `${apiUrl}/${id}/screenshots?key=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGameScreenshots(data.results);
        console.log("trailer ", data);
      })
      .catch((err) => {
        setScreenshotsError(err);
        console.error(err);
      })
      .finally(() => setScreenshotsLoading(false));
  };

  const value = {
    games,
    isLoading,
    error,
    fetchGames,
    searchedGames,
    searchLoading,
    searchError,
    searchGames,
    searchTerm,
    setSearchTerm,
    searchBarActive,
    setSearchBarActive,
    gameDetails,
    detailsError,
    detailsLoading,
    fetchGameDetails,
    gameScreenshots,
    screenshotsError,
    screenshotsLoading,
    fetchGameScreenshots,
    activeToggle,
    setActiveToggle
  }
  return (
    <GameContext.Provider value={value}>
      <div>{children}</div>
    </GameContext.Provider>
  );
}