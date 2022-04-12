import React from "react";
import "./Nav.css";

import logostart from "../../assets/logostart.png";
import { Link } from "react-router-dom";

import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const Nav = () => {
  const showMenu = () => {
    const nav = document.getElementById("nav");
    const menu = document.getElementById("menu");
    nav.style.left = "0";
    menu.style.display = "none";
  };

  const closeMenu = () => {
    const nav = document.getElementById("nav");
    const menu = document.getElementById("menu");
    nav.style.left = "100vw";
    menu.style.display = "flex";
  };

  return (
    <nav className="app__nav" id="nav">
      <div className="app__nav-menu" id="menu" onClick={showMenu}>
        <BiMenu className="app__nav-menu-icon" />
      </div>
      <div className="app__nav-logo">
        <Link to="/home">
          <img src={logostart} alt="" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <Link to="/home" className="app__navbar-mobile" onClick={closeMenu}>
          <li>O NBA</li>
        </Link>
        <Link to="/players" onClick={closeMenu}>
          <li>ZAWODNICY</li>
        </Link>
        <Link to="/teams" onClick={closeMenu}>
          <li>DRUŻYNY</li>
        </Link>
        <Link to="/games" onClick={closeMenu}>
          <li>MECZE</li>
        </Link>
        <Link to="/plans" onClick={closeMenu}>
          <li>WAŻNE</li>
        </Link>
        <div className="app__nav-x" onClick={closeMenu}>
          <CgClose />
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
