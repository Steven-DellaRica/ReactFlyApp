import { Route, Routes } from "react-router-dom";
import Calendrier from "./Calendar";
import Reservation from "./Reservation";
import { ContextAirportsProvider } from './ContextAirports';
import AirportAPI from './AirportAPI'
import Personnes from "./Personnes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <ContextAirportsProvider>

            <Routes>
              <Route path="/" element={<AirportAPI />} />
              <Route path="/:airportCode" element={<Calendrier />} />
              <Route path="/:airportCode/:date" element={<Reservation />} />
            </Routes>
          </ContextAirportsProvider>
        </>
      </header>
    </div>
  );
}

export default App;
