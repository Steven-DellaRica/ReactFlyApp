import { Link, Route, Routes } from "react-router-dom";
import Calendrier from "./Calendar";
import Reservation from "./Reservation";
import { ContextAirportsProvider } from './ContextAirports';
import AirportAPI from './AirportAPI'
import Personnes from "./Personnes";
import Meteo from "./Meteo";
import { useState } from "react";
import Login from "./Login";
import { FetchProvider } from "./FetchUser";
import Profile from "./Profile";
import AirportAPI from "./AirportAPI"

function App() {



  return (
    <FetchProvider>
    <div className="App">
      <header className="App-header">
        <>
          <ContextAirportsProvider>

            <Routes>
              <Route path="/" element={<AirportAPI />} />
              <Route path="/:airportCode" element={<Calendrier />} />
              <Route path="/:airportCode/:date" element={<Reservation />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </ContextAirportsProvider>
        </>
      </header>
    </div>
    </FetchProvider>
  );
}

export default App;
