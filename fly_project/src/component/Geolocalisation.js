import React, { useEffect, useState } from 'react';

export default function Geolocalisation() {
    const [userPosition, setUserPosition] = useState(null);
    const [locationInfo, setLocationInfo] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setUserPosition({ latitude, longitude });
                },
                error => {
                    console.error(error.message);
                }
            );
        } else {
            console.error("La géolocalisation n'est pas supportée par le navigateur.");
        }
    }, []);

    useEffect(() => {
        if (userPosition) {
            const { latitude, longitude } = userPosition;

            fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            )
                .then(response => response.json())
                .then(data => {
                    if (data.address) {
                        setLocationInfo({
                            city: data.address.city ? data.address.city : "Unknown city",
                            country: data.address.country ? data.address.country : "Unknown country"
                        });
                    }
                })
                .catch(error => {
                    console.error("Error fetching location data:", error);
                });
        }
    }, [userPosition]);

    return (
        <>
            {locationInfo && (
                <p>
                    Ville: {locationInfo.city}, Pays: {locationInfo.country}
                </p>
            )}
        </>
    );
}
