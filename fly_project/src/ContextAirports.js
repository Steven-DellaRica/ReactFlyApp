import React, { createContext, useEffect, useState } from 'react'

export const AirportsArray = createContext();

export const ContextAirportsProvider = ({children}) => {
    const [airportInfoArray, setAirportInfoArray] = useState([]);

    async function fetchData() {
        const response = await fetch('https://airlabs.co/api/v9/airports?country_code=FR&api_key=4282ff1c-eb50-464f-bd58-7987b3ac929b');
        const airports = await response.json();
        console.log(airports.response);
        setAirportInfoArray(airports.response);
    }

    useEffect(() => fetchData, []);

    const data = {
        airportInfoArray,
    }

  return (
    <AirportsArray.Provider value={data}>
        {children}
    </AirportsArray.Provider>

  )
}
