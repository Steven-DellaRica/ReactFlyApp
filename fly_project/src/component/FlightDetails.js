import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AirportsArray } from './ContextAirports';
import { FetchContext } from './FetchUser';
import Login from './Login';

export default function FlightDetails() {
    const { flightCode } = useParams();
    const [reserveOK, setReserveOK] = useState(null);

    const {currentFlight} = useContext(AirportsArray)

    const { loggedInUser } = useContext(FetchContext);

    function changeReserve(){
        setReserveOK('Réservation confirmée');
    }

    

    return (
        <div>
            <Login />

            {loggedInUser ?
                <div>
                    <p>Bienvenue sur le vol : {flightCode}, {loggedInUser}</p>
                    <p>Choix de vols après destination : </p>
                    <p>Destination : {currentFlight.arr_iata}</p>
                    <p>Flight number : {currentFlight.flight_number}</p>
                    <p>Take off : {currentFlight.dep_time}</p>
                    <p>Time of landing : {currentFlight.arr_time}</p>
                    <button onClick={changeReserve}>Confirmer la réservation</button>
                    <p>{reserveOK}</p>
                </div> : <p>Veuillez vous connecter pour accéder à la réservation !</p>}

        </div>
    )
}
