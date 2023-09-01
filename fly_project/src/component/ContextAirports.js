import React, { createContext, useEffect, useState } from 'react'

export const AirportsArray = createContext();

export const ContextAirportsProvider = ({children}) => {
    const [airportInfoArray, setAirportInfoArray] = useState([]);
    // const [locationInfo, setLocationInfo] = useState(null);
    const [currentFlight, setCurrentFlight] = useState(null);

    async function fetchData() {
        const response = await fetch('https://airlabs.co/api/v9/airports?country_code=FR&api_key=4282ff1c-eb50-464f-bd58-7987b3ac929b');
        const airports = await response.json();
        setAirportInfoArray(airports.response);
    }

    useEffect(() => fetchData, []);

    // const [userPosition, setUserPosition] = useState(null);

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             position => {
    //                 const { latitude, longitude } = position.coords;
    //                 setUserPosition({ latitude, longitude });
    //             },
    //             error => {
    //                 console.error(error.message);
    //             }
    //         );
    //     } else {
    //         console.error("La géolocalisation n'est pas supportée par le navigateur.");
    //     }
    // }, []);

    // useEffect(() => {
    //     if (userPosition) {
    //         const { latitude, longitude } = userPosition;

    //         fetch(
    //             `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    //         )
    //             .then(response => response.json())
    //             .then(data => {
    //                 if (data.address) {
    //                     setLocationInfo({
    //                         city: data.address.city ? data.address.city : "Unknown city",
    //                         country: data.address.country ? data.address.country : "Unknown country"
    //                     });
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error("Error fetching location data:", error);
    //             });
    //     }
    // }, [userPosition]);

    function keepFlightInfos(infos){
        setCurrentFlight(infos);
    }

    const data = {
        airportInfoArray,
        currentFlight,
        keepFlightInfos
    }

  return (
    <AirportsArray.Provider value={data}>
        {children}
    </AirportsArray.Provider>

  )
}
