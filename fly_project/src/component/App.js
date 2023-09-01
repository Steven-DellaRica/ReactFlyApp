import { Link, Route, Routes } from "react-router-dom";
import Calendrier from "./Calendar";
import Reservation from "./Reservation";
import Geolocalisation from "./Geolocalisation";
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
          <Routes>
            <Route path="/" element={<AirportAPI/>}/>
            <Route path="/calendrier" element={<Calendrier />} />
            <Route path="/reservation/:date" element={<Reservation />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/coucoujaifaim" element={<Login />} />
          </Routes>
        </>
      </header>
    </div>
    </FetchProvider>
  );
}

export default App;
