import React, { useEffect } from "react";
import "./Games.css";

const Games = ({ setNavOn }) => {
  useEffect(() => {
    setNavOn(true);
  }, [setNavOn]);
  return (
    <div className="app__games">
      <h1>Games</h1>
    </div>
  );
};

export default Games;
