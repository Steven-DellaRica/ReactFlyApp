import React, { useState } from "react";
import "../style/Calendar.css";
import Calendar from "react-calendar";
import Login from "./Login";

export default function Calendrier() {
  const [newDate, setDate] = useState('');

  // const date = new Date();

  // let currentDay = String(date.getDate()).padStart(2, "0");

  // let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

  // let currentYear = date.getFullYear();

  // let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

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
    window.location.href = `/reservation/${formattedDate}`;
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
        <button onClick={handleDateClick}>Reservation</button>
      </div>
    </>
  );
}
