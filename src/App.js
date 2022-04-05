import { lazy, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./components/start/Start";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";

const Main = lazy(() => import("./components/main/Main.js"));
const Games = lazy(() => import("./components/games/Games.js"));
const Players = lazy(() => import("./components/players/Players.js"));
const Stats = lazy(() => import("./components/stats/Stats.js"));
const Teams = lazy(() => import("./components/teams/Teams"));

function App() {
  const [navOn, setNavOn] = useState(false);

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <div className="App">
          {navOn === true ? <Nav /> : null}
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Main setNavOn={setNavOn} />} />
            <Route path="/games" element={<Games setNavOn={setNavOn} />} />
            <Route path="/players" element={<Players setNavOn={setNavOn} />} />
            <Route path="/stats" element={<Stats setNavOn={setNavOn} />} />
            <Route path="/teams" element={<Teams setNavOn={setNavOn} />} />
          </Routes>
          {navOn === true ? <Footer /> : null}
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
