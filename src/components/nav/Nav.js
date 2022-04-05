import React from "react";
import "./Nav.css";

import logostart from "../../assets/logostart.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="app__nav">
      <div className="app__nav-logo">
        <Link to="/home">
          <img src={logostart} alt="" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <Link to="/players">
          <li>ZAWODNICY</li>
        </Link>
        <Link to="/teams">
          <li>DRUŻYNY</li>
        </Link>
        <Link to="/games">
          <li>MECZE</li>
        </Link>
        <Link to="/stats">
          <li>STATYSTYKI</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
