import React, { useEffect, useState } from "react";
import "./Games.css";
import axios from "axios";
import { HiArrowNarrowDown } from "react-icons/hi";

const Games = ({ setNavOn, morePages, setMorePages }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("https://free-nba.p.rapidapi.com/games", {
        params: {
          page: "0",
          per_page: `${morePages}`,
          team_ids: "",
          date: "",
          Seasons: "",
        },
        headers: {
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          "X-RapidAPI-Key":
            "5542a43ddcmsh8b0c4fe0e35f762p112032jsn26d0ece4152e",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setGames(res.data.data);
      })
      .catch((err) => console.log(err));
    setNavOn(true);
  }, [setNavOn, morePages]);

  return (
    <div className="app__games">
      <h1>Mecze</h1>
      <div className="app__games-content">
        {games.map((game) => {
          return (
            <div className="app__game-all">
              <div className="app__games-screen" key={game.id}>
                <div className="app__games-home_team">
                  <h2>{game.home_team.full_name}</h2>
                </div>
                <div className="app__games-result">
                  <h3>{game.home_team_score}</h3>
                  <h4> - </h4>
                  <h3>{game.visitor_team_score}</h3>
                </div>
                <div className="app__games-home_team">
                  <h2>{game.visitor_team.full_name}</h2>
                </div>
              </div>
              <div className="app__games-info">
                <h3>Data: {game.date.toString().slice(0, 10)}</h3>
                <h3>Sezon: {game.season}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="app__games-more"
        onClick={() => setMorePages(morePages + 25)}
      >
        <HiArrowNarrowDown className="app__games-more-icon" />
        <h4>więcej</h4>
      </div>
    </div>
  );
};

export default Games;
