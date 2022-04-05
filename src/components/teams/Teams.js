import React, { useEffect } from "react";
import "./Teams.css";

const Teams = ({ setNavOn }) => {
  useEffect(() => {
    setNavOn(true);
  }, [setNavOn]);
  return (
    <div className="app__teams">
      <h1>Teams</h1>
    </div>
  );
};

export default Teams;
