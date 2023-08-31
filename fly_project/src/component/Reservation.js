import React from 'react';
import { useParams } from 'react-router-dom';

function Reservation() {
  const { date } = useParams();

  return (
    <div>
      <h2>Reservation Details for {date}</h2>
    </div>
  );
}

export default Reservation;
