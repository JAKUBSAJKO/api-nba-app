import React, { useEffect } from "react";
import "./Plans.css";

import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsFillHandThumbsDownFill } from "react-icons/bs";

const Plans = ({ setNavOn, setMorePages }) => {
  useEffect(() => {
    setMorePages(25);
    setNavOn(true);
  }, [setNavOn]);

  return (
    <div className="app__plans">
      <div className="app__plans-content">
        <h1>Podsumowanie pracy</h1>
        <div className="app__plans-yes">
          <div className="app__plans-header">
            <BsFillHandThumbsUpFill className="app__plans-header-icon-yes" />
            <h2>Udało się zrobić</h2>
          </div>
          <hr />
          <ul>
            <h2>Strona tytułowa</h2>
            <li>Zgodnie z planem</li>
            <h2>Strona główna</h2>
            <li>Zgodnie z planem</li>
            <h2>Strona z zawodnikami</h2>
            <li>Wykorzystanie wszystkich przydatnych danych</li>
            <li>Wyświetlenie zawodników w kartach</li>
            <li>Przełączanie stron z zawodnikami</li>
            <li>Wyszukiwarka zawodników po imieniu i nazwisku</li>
            <h2>Strona z drużynami</h2>
            <li>Wyświetlenie drużyn w liście</li>
            <li>Wykorzystnie wszystkich przydatnych danych</li>
            <h2>Strona z meczami</h2>
            <li>Wykorzystanie wszystkich przydatnych danych</li>
            <li>Wyświetlenie szczegółów meczów</li>
            <li>
              Wyświetlenie więcej meczów po kliknięciu elementu do tego
              przeznaczony
            </li>
          </ul>
        </div>
        <div className="app__plans-no">
          <div className="app__plans-header">
            <BsFillHandThumbsDownFill className="app__plans-header-icon-no" />
            <h2>Nieudało się zrobić</h2>
          </div>
          <hr />
          <ul>
            <h2>Strona z meczami</h2>
            <li>
              Filtrowanie meczów po zespole (problem po stronie API,
              niedziałający parametr)
            </li>
            <li>
              Filtrowanie meczów po dacie (problem po stronie API, niedziałający
              parametr)
            </li>
            <li>
              Filtrowanie meczów po sezonie (problem po stronie API,
              niedziałający parametr)
            </li>
            <h2>Strona ze statystykami (nie ma na stronie)</h2>
            <li>
              Wyświtlenie statystyk konkretnego zawodnika (problem po stronie
              API, niedziałający parametr)
            </li>
            <li>
              Wyświtlenie statystyk konkretnego meczu (problem po stronie API,
              niedziałający parametr)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plans;
