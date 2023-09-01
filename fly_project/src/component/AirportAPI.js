import { Link } from "react-router-dom";
import Login from "./Login";


export default function Map() {



    return (
        <div className="map-container">
            <div className='map'>
                <Login/>
                <h1>Carte</h1>
            <Link to="/calendrier"><button>Aéroport</button></Link>
              
            </div>
        </div>
    )
}