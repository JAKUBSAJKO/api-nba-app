import React, { useEffect } from "react";
import "./Main.css";
import nbadivision from "../../assets/NBAConferencesDivisions.png";

const Main = ({ setNavOn, setMorePages }) => {
  useEffect(() => {
    setMorePages(25);
    setNavOn(true);
  }, [setNavOn]);
  return (
    <div className="main__container">
      <h1 className="main__container-h1-nba">
        National Basketball Association
      </h1>
      <p className="main__container-nba-description">
        NBA - amerykańsko-kanadyjska liga koszykarska, o charakterze
        profesjonalnym. Tworzy ją 30 zespołów, w tym: 29 ze Stanów Zjednoczonych
        i jeden z Kanady. NBA jest jedną z czterech największych
        północnoamerykańskich zawodowych lig sportowych (oprócz niej NFL, NHL i
        MLB).
      </p>
      <h1 className="main__container-h1-nba-description">Rozgrywki</h1>
      <div className="main__container-image">
        <img src={nbadivision} alt="" />
      </div>
      <p className="main__container-text">
        Drużyny podzielone są na dwie Konferencje: Wschodnią i Zachodnią.
        Konferencje podzielone są z kolei na trzy dywizje.
      </p>
      <p className="main__container-text">
        Rozgrywki składają się z sezonu zasadniczego i rozgrywek pucharowych
        (play-off).
      </p>
      <p className="main__container-text">
        W sezonie zasadniczym drużyny z tej samej dywizji rozgrywają ze sobą po
        4 mecze (16 gier), po 3 lub 4 z drużynami innych dywizji tej samej
        konferencji (w sumie 52 mecze w obrębie konferencji), zaś pozostałe 30
        meczów z drużynami drugiej konferencji. <br className="desktop" />W ten
        sposób każda drużyna gra z każdą w zasadniczej części sezonu, „u siebie”
        i „na wyjeździe”.
      </p>
      <p className="main__container-text">
        W fazie play-off najpierw wyłaniani są mistrzowie poszczególnych
        konferencji. W pojedynkach ośmiu najlepszych zespołów z danej
        konferencji kolejność ustalana jest na podstawie ilości wygranych i
        przegranych meczów w sezonie. Rozgrywki play-off przebiegają według
        scenariusza: w I rundzie play-off pierwszy zespół gra z ósmym, drugi z
        siódmym, trzeci z szóstym, czwarty z piątym.
        <br className="desktop" />
        W II rundzie play-off zwycięzca pojedynku pierwszy z ósmym gra ze
        zwycięzcą pojedynku czwarty z piątym, i dalej zwycięzca pojedynku drugi
        z siódmym, gra ze zwycięzcą pojedynku trzeci z szóstym. Taki rozstaw
        jest spowodowany tym, aby już w II rundzie play-off nie trafiły na
        siebie drużyny najsilniejsze po fazie zasadniczej oraz aby lider
        konferencji miał w play-off teoretycznie łatwiej. Zwycięzcy tych meczów
        spotykają się ze sobą w finale konferencji. Zwycięzcy finałów
        konferencji spotykają się ze sobą w finale ligi. Zespoły rozstawione
        wyżej grają więcej meczów u siebie w systemie 2 mecze dom, 2 – wyjazd,
        1-dom, 1-wyjazd, 1-dom.
        <br className="desktop" />W pojedynkach fazy play-off gra się do
        czterech zwycięstw (tzw. best of seven). Ten system 2-2-1-1-1 obowiązuje
        również w finale NBA.)
      </p>
    </div>
  );
};

export default Main;
