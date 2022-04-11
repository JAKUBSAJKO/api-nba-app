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
const Playersdetail = lazy(() =>
  import("./components/playersdetail/Playersdetail")
);
const Teams = lazy(() => import("./components/teams/Teams"));
const Teamsdetail = lazy(() => import("./components/teamsdetail/Teamsdetail"));
const Plans = lazy(() => import("./components/plans/Plans"));

function App() {
  const [navOn, setNavOn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [morePages, setMorePages] = useState(25);

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
            <Route
              path="/home"
              element={<Main setNavOn={setNavOn} setMorePages={setMorePages} />}
            />
            <Route
              path="/games"
              element={
                <Games
                  setNavOn={setNavOn}
                  morePages={morePages}
                  setMorePages={setMorePages}
                />
              }
            />
            <Route
              path="/players"
              element={
                <Players
                  setNavOn={setNavOn}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setMorePages={setMorePages}
                />
              }
            />
            <Route
              path="/players/:id"
              element={<Playersdetail setNavOn={setNavOn} />}
            />
            <Route
              path="/teams"
              element={
                <Teams setNavOn={setNavOn} setMorePages={setMorePages} />
              }
            />
            <Route
              path="/teams/:id"
              element={<Teamsdetail setNavOn={setNavOn} />}
            />
            <Route
              path="/plans"
              element={
                <Plans setNavOn={setNavOn} setMorePages={setMorePages} />
              }
            />
          </Routes>
          {navOn === true ? <Footer /> : null}
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
