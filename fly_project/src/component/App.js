import { Route, Routes } from "react-router-dom";

import Calendrier from "./Calendar";
import Reservation from "./Reservation";
import Geolocalisation from "./Geolocalisation";
import Personnes from "./Personnes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Geolocalisation />

          <Routes>
            <Route path="/" element={<Calendrier />} />
            <Route path="/reservation/:date" element={<Reservation />} />
          </Routes>
        </>
      </header>
    </div>
  );
}

export default App;
