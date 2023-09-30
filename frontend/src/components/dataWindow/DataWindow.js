import React, { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom'

export default function DataWindow() {
  const MinuteInMiliSeconds = 60000
  const GamesApiUrl = "http://localhost:8000/api/games/"
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(GamesApiUrl);
      const data = await response.json();
      setGames(data);
    };
    fetchGames();
    const interval = setInterval(fetchGames, MinuteInMiliSeconds);
    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
        <Outlet context={[games,]} />
  )
}