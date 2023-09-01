import { Route, Routes } from "react-router-dom";
import { ContextAirportsProvider } from './ContextAirports';
import { FetchProvider } from "./FetchUser";
import AirportAPI from './AirportAPI'
import Calendrier from "./Calendar";
import Reservation from "./Reservation";
import FlightDetails from './FlightDetails'
import Profile from "./Profile";
import Login from "./Login";

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <>
          <ContextAirportsProvider>
            <FetchProvider>

              <Routes>
                <Route path="/" element={<AirportAPI />} />
                <Route path="/:airportCode" element={<Calendrier />} />
                <Route path="/:airportCode/:date" element={<Reservation />} />
                <Route path="/:airportCode/:date/:flightCode" element={<FlightDetails />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="/Login" element={<Login />} />
              </Routes>
            </FetchProvider>
          </ContextAirportsProvider>
        </>
      </header>
    </div>

  );
}

export default App;
