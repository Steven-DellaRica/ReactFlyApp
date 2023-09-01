import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useContext } from 'react';
import { AirportsArray } from './ContextAirports';
import Login from './Login';
import ChangeView from './ChangeView';
import { Link } from "react-router-dom";
import '../style/Leaflet.css'

export default function AirportAPI() {

    const { airportInfoArray, userPosition } = useContext(AirportsArray);

    let posLatitude = 43.63016777401294;
    let posLongitude = 3.90063685929421;

    console.log(userPosition);

    console.log(airportInfoArray);

    return (
        <div className="App">
            <div className='App-header'>
                <Login />

                <MapContainer center={[posLatitude, posLongitude]} zoom={12} scrollWheelZoom={true}>
                    <ChangeView center={[posLatitude, posLongitude]} zoom={12} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {airportInfoArray ? airportInfoArray.map((airport) => <Marker key={airport.name} position={[airport.lat, airport.lng]}>
                        <Popup>
                            <div>
                                {airport.name}
                                <Link key={airport.icao_code} to={`/${airport.icao_code}`}><button>Voir Calendrier</button></Link>
                            </div>
                        </Popup>
                    </Marker>) : null}
                </MapContainer>
            </div>
        </div>
    )
}