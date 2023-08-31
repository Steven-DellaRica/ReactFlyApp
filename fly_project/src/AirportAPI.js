import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useContext } from 'react';
import { AirportsArray } from './ContextAirports';
import './Leaflet.css'

export default function Map() {

    const{ airportInfoArray } = useContext(AirportsArray);

    return (
        <div className="map-container">
            <div className='map'>

                <MapContainer center={[43.63373312745044, 3.8988220189265435]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {airportInfoArray ? airportInfoArray.map((airport) => <Marker key={airport.name} position={[airport.lat, airport.lng]}>
                        <Popup>
                            {airport.name}
                        </Popup>
                    </Marker>) : null}
                </MapContainer>
            </div>
        </div>
    )
}