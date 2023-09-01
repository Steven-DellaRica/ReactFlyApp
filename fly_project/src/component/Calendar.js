import React, { useState } from "react";
import "../style/Calendar.css";
import Calendar from "react-calendar";
import Login from "./Login";
import { useParams } from "react-router-dom";


export default function Calendrier() {
  const [newDate, setDate] = useState('');

  const {airportCode} = useParams();

  // const [flights, setFlights] = useState({date}, {destination})

  // const [destination, setDestination] = useState({heure, price, companie, monculsurlacommode})

  const handleDateChange = (clickedDate) => {
    let currentDay = String(clickedDate.getDate()).padStart(2, "0");
    let currentMonth = String(clickedDate.getMonth() + 1).padStart(2, "0");
    let currentYear = clickedDate.getFullYear();
    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

    console.log(currentDate);

    setDate(currentDate);
  };

  const handleDateClick = () => {
    const formattedDate = newDate;
    console.log(formattedDate);
    window.location.href = `/${airportCode}/${formattedDate}`;
  };

  return (
    <>
    <Login/>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={newDate} />
      </div>
      <div className="text-center">
        {console.log(newDate)}
        Selectionner une date: {newDate}
        <button onClick={handleDateClick}>Voir vols</button>
      </div>
    </>
  );
}
