import React from "react";
import "./Start.css";
import logostart from "../../assets/logostart.png";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="app__container">
      <h1>NBA APP</h1>
      <p>
        Aplikacja wykorzystuje dane pochodzące z FREE NBA API Documentation.
        <br className="desktop" />
        Została stworzona w celach edukacjynch, <br className="desktop" />
        aby sprawdzić swoje umiętności przy pracy z API.
      </p>
      <div className="app__container-logoandbutton">
        <img src={logostart} alt="" />
        <Link to="/home">
          <button>PRZEJDŹ DO STRONY</button>
        </Link>
        <img src={logostart} alt="" />
      </div>
      <h2>Made by Jakub Sajko</h2>
    </div>
  );
};

export default Start;
