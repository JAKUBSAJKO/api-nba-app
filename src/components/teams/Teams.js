import React, { useEffect, useState } from "react";
import "./Teams.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaBasketballBall } from "react-icons/fa";

const Teams = ({ setNavOn }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("https://free-nba.p.rapidapi.com/teams", {
        headers: {
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          "X-RapidAPI-Key":
            "5542a43ddcmsh8b0c4fe0e35f762p112032jsn26d0ece4152e",
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setTeams(response.data.data);
      })
      .catch((error) => console.log("ERROR", error));
    setNavOn(true);
  }, [setNavOn]);

  return (
    <div className="app__teams">
      <h1>Drużyny</h1>
      <div className="app__teams-content">
        {teams.map((team) => {
          return (
            <Link to={`/teams/${team.id}`}>
              <div className="app__teams-element" key={team.id}>
                <FaBasketballBall className="app_teams-icon" />
                <h2 className="app__teams-teams-name">{team.full_name}</h2>
                <FaBasketballBall className="app_teams-icon" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
