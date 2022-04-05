import React, { useEffect } from "react";
import "./Players.css";

const Players = ({ setNavOn }) => {
  useEffect(() => {
    setNavOn(true);
  }, [setNavOn]);
  return (
    <div className="app__players">
      <h1>Players</h1>
    </div>
  );
};

export default Players;
