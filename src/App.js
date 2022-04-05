import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./components/start/Start";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Games from "./components/games/Games";
import Players from "./components/players/Players";
import Stats from "./components/stats/Stats";
import Teams from "./components/teams/Teams";

function App() {
  const [navOn, setNavOn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        {navOn === true ? <Nav /> : null}
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route path="/home" element={<Main setNavOn={setNavOn} />} />
          <Route path="/games" element={<Games />} />
          <Route path="/players" element={<Players />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
        {navOn === true ? <Footer /> : null}
      </div>
    </BrowserRouter>
  );
}

export default App;
