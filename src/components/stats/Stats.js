import React, { useEffect } from "react";
import "./Stats.css";

const Stats = ({ setNavOn }) => {
  useEffect(() => {
    setNavOn(true);
  }, [setNavOn]);
  return (
    <div className="app__stats">
      <h1>Stats</h1>
    </div>
  );
};

export default Stats;
