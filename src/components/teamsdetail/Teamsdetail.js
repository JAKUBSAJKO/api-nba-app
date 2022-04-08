import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Teamsdetail.css";
import { FaBackspace } from "react-icons/fa";

const Teamsdetail = ({ setNavOn }) => {
  let { id } = useParams();

  const [teamDetail, setTeamDetail] = useState([]);

  useEffect(() => {
    teamDetailData();
    setNavOn(true);
  }, [setNavOn]);

  const teamDetailData = () => {
    axios
      .get(`https://free-nba.p.rapidapi.com/teams/${id}`, {
        headers: {
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          "X-RapidAPI-Key":
            "5542a43ddcmsh8b0c4fe0e35f762p112032jsn26d0ece4152e",
        },
      })
      .then((response) => {
        console.log(response.data);
        setTeamDetail(response.data);
      })
      .catch((error) => console.log("ERROR", error));
  };

  return (
    <div className="app__teamdetail">
      <div className="app__teamdetail-content">
        <h1>
          {teamDetail.full_name} ({teamDetail.abbreviation})
        </h1>
        <div className="app__teamdetail-strip"></div>
        <div className="app__teamdetail-teamdetail">
          <h2>Miasto: {teamDetail.city}</h2>
          <h2>Konferencja: {teamDetail.conference}</h2>
          <h2>Dywizja: {teamDetail.division}</h2>
        </div>
        <div className="app__teamdetail-strip"></div>
      </div>
      <Link to="/teams">
        <button className="app__teamdetail-btn">
          <h3>Wróć</h3> <FaBackspace className="app__teamdetail-btn-icon" />
        </button>
      </Link>
    </div>
  );
};

export default Teamsdetail;
