import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Playersdetail.css";
import axios from "axios";
import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Playersdetail = ({ setNavOn }) => {
  const { id } = useParams();

  const [playerDetail, setPlayerDetail] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios
      .get(`https://free-nba.p.rapidapi.com/players/${id}`, {
        headers: {
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          "X-RapidAPI-Key":
            "5542a43ddcmsh8b0c4fe0e35f762p112032jsn26d0ece4152e",
        },
      })
      .then((response) => {
        console.log(response.data);
        setPlayerDetail(response.data);
        setTeam(response.data.team);
      })
      .catch((error) => error);
    setNavOn(true);
  }, []);

  return (
    <div className="app__playerdetail">
      <Link to="/players" className="app__playerdetail-mobile-back">
        <IoArrowBack />
      </Link>
      <div className="app__playerdetail-content">
        <div className="app__playerdetail-image">
          <IoIosPerson />
        </div>
        <div className="app__playerdetail-strip"></div>
        <div className="app__playerdetail-description">
          <h1>imię</h1>
          <h2>{playerDetail.first_name}</h2>
          <h1>nazwisko</h1>
          <h2>{playerDetail.last_name}</h2>
          <h1>pozycja *</h1>
          <h2>
            {playerDetail.position === null || playerDetail.position === ""
              ? "Brak danych"
              : playerDetail.position}
          </h2>
          <h1>drużyna</h1>
          <h2>{team.full_name}</h2>
          <h1>wzrost **</h1>
          <h2>
            {playerDetail.height_inches === null
              ? "Brak danych"
              : playerDetail.height_inches}
          </h2>
          <h1>waga ***</h1>
          <h2>
            {playerDetail.weight_pounds === null
              ? "Brak danych"
              : playerDetail.weight_pounds}
          </h2>
        </div>
      </div>
      <div className="app__playerdetail-explain">
        <hr />
        <div className="app__playerdetail-explain-all">
          <h3>* Nazwy pozycji:</h3>
          <h4>PG - rozgrywający</h4>
          <h4>SG - rzucający obrońca</h4>
          <h4>SF - niski skrzydłowy</h4>
          <h4>PF - silny skrzydłowy</h4>
          <h4>C - center</h4>
          <h3>** Wysokość została podane w calach</h3>
          <h3>*** Waga została podane w funtach</h3>
        </div>
      </div>
    </div>
  );
};

export default Playersdetail;
