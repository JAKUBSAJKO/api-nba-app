import React, { useEffect, useState } from "react";
import "./Players.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";
import { BiRightArrowCircle } from "react-icons/bi";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { BsArrowBarDown } from "react-icons/bs";

const Players = ({ setNavOn, currentPage, setCurrentPage, setMorePages }) => {
  const [players, setPlayers] = useState([]);
  const [namePlayer, setNamePlayer] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    setMorePages(25);
    axios
      .get("https://free-nba.p.rapidapi.com/players", {
        params: {
          page: `${currentPage}`,
          per_page: "40",
          search: `${searchName}`,
        },
        headers: {
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          "X-RapidAPI-Key":
            "5542a43ddcmsh8b0c4fe0e35f762p112032jsn26d0ece4152e",
        },
      })
      .then((response) => {
        console.log(response.data);
        setPlayers(response.data.data);
      })
      .catch((error) => console.log("Error", error));
    setNavOn(true);
  }, [setNavOn, currentPage, searchName]);

  const nextPage = () => {
    if (currentPage === 94) setCurrentPage(1);
    else setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) setCurrentPage(94);
    else setCurrentPage(currentPage - 1);
  };

  return (
    <div className="app__players">
      <div
        className="app__players-wysun"
        onClick={() => {
          const panel = document.getElementById("panel");
          panel.style.top = "0px";
        }}
      >
        <div className="app__players-wysun-group">
          <h1>szukaj zawodnika</h1>
          <BsArrowBarDown className="app__players-wysun-group-icon" />
        </div>
      </div>
      <div className="app__players-search-panel" id="panel">
        <input
          className="app__players-search-input"
          type="text"
          id="search"
          placeholder="znajdź zawodnika"
          onChange={(e) => {
            setNamePlayer(e.target.value);
          }}
          value={namePlayer}
        />
        <button
          className="app__players-search-btn"
          onClick={() => {
            const panel = document.getElementById("panel");
            const counterPage = document.getElementById("counter-page");
            setSearchName(namePlayer);
            if (namePlayer !== "") {
              counterPage.style.display = "none";
              setCurrentPage(1);
            } else counterPage.style.display = "flex";
            panel.style.top = "-400px";
            console.log("test");
          }}
        >
          <BiSearchAlt2 className="app__players-search-icon" />
          Szukaj
        </button>
      </div>
      <h1>Zawodnicy</h1>
      <div className="app__players-content">
        {players.map((player) => {
          return (
            <Link to={`/players/${player.id}`}>
              <div className="app__players-card" key={player.id}>
                <h2>
                  {player.first_name} {player.last_name}
                </h2>
                <IoIosPerson className="app__players-icon" />
                <h3>{player.team.abbreviation}</h3>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="app__players-counter-page" id="counter-page">
        <BiLeftArrowCircle className="app__players-arrow" onClick={prevPage} />
        <div className="app__players-counter">
          <div className="app__players-counter-side">
            {currentPage === 1 ? 94 : currentPage - 1}
          </div>
          <div className="app__players-counter-main">{currentPage}</div>
          <div className="app__players-counter-side">
            {currentPage === 94 ? 1 : currentPage + 1}
          </div>
        </div>
        <BiRightArrowCircle className="app__players-arrow" onClick={nextPage} />
      </div>
    </div>
  );
};

export default Players;
