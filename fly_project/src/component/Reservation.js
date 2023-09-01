import React, { useContext, useEffect, useState } from 'react';
import { AirportsArray } from './ContextAirports';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Reservation() {
  const { airportCode, date } = useParams();
  const [flightsInfos, setFlightsInfos] = useState([]);
  const [destFlight, setDestFlights] = useState([]);
  const [isDestOn, setIsDestOn] = useState(false);

  const {keepFlightInfos} = useContext(AirportsArray);

  async function fetchFlights() {
    const response = await fetch(`https://airlabs.co/api/v9/schedules?dep_icao=${airportCode}&api_key=4282ff1c-eb50-464f-bd58-7987b3ac929b`);
    const flights = await response.json();
    console.log(flights);
    setFlightsInfos(flights.response);
  }

  useEffect(() =>
    fetchFlights
    , []);

  const uniqueArray = () => {
    let newArray = [];

    let uniqueObject = {};

    for (let flight in flightsInfos) {
      const objTitle = flightsInfos[flight]['arr_iata'];
      uniqueObject[objTitle] = flightsInfos[flight];
    }

    for (let iata in uniqueObject) {
      newArray.push(uniqueObject[iata]);
    }

    return newArray;
  };

  const showDest = (e) => {
    e.preventDefault();
    setIsDestOn(true);
    setDestFlights(flightsInfos.filter((flight) => flight.arr_iata === e.currentTarget.value));
  }

  return (
    <div>
      <h2>Every destinations possible {date}</h2>
      {
        isDestOn ? destFlight.map((flight) =>
          <div key={flight.flight_icao}>
            <p>Choix de vols après destination :</p>
            <p>Destination : {flight.arr_iata}</p>
            <p>Flight number : {flight.flight_number}</p>
            <p>Take off : {flight.dep_time}</p>
            <p>Time of landing : {flight.arr_time}</p>
            <Link to={`/${airportCode}/${date}/${flight.flight_icao}`}><button onClick={keepFlightInfos(flight)}>Réserver ce vol</button></Link>
          </div>
        ) :
          flightsInfos.length > 100 ?
            uniqueArray(flightsInfos).map((flight) => <button key={flight.flight_icao} onClick={showDest} value={flight.arr_iata}><p >Destination : {flight.arr_iata}</p></button>) :
            flightsInfos.map((flight) =>
              <div key={flight.flight_icao}>
                <p>Choix de vols après destination :</p>
                <p>Destination : {flight.arr_iata}</p>
                <p>Flight number : {flight.flight_number}</p>
                <p>Take off : {flight.dep_time}</p>
                <p>Time of landing : {flight.arr_time}</p>
                <Link to={`/${airportCode}/${date}/${flight.flight_icao}`}><button onClick={keepFlightInfos(flight)}>Réserver ce vol</button></Link>
              </div>)
      }
    </div>

  );
}

export default Reservation;
