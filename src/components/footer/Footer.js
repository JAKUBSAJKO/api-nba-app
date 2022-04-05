import React from "react";
import "./Footer.css";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import logofooter from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-content">
        <h1>National Basketball Association</h1>
        <a href="https://www.nba.com" target="_blank" rel="noopener noreferrer">
          <img src={logofooter} alt="" />
        </a>
        <h2>Social Media</h2>
        <div className="app__footer-icons">
          <a
            href="https://www.facebook.com/nba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="app__footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/nba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="app__footer-icon" />
          </a>
          <a
            href="https://twitter.com/NBA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="app__footer-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@nba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="app__footer-icon" />
          </a>
        </div>

        <h3>Made by Jakub Sajko</h3>
      </div>
    </footer>
  );
};

export default Footer;
