import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./components/start/Start";
import Main from "./components/main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
