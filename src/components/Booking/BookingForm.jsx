import React, { useEffect, useState } from "react";
import fakeAPI, { fetchAPI } from "../../utils/fakeAPI";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [selectedTime, setSelectedTime] = useState("");
  // uppdaterad att hämta från fakeAPI
  const [availableTimes, setAvailableTimes] = useState([]);

  // Hämtar tillgängliga tider när komponenten monteras
  useEffect(() => {
    initializeTimes();
  }, []);

  const initializeTimes = () => {
    const today = new Date();
    const times = fetchAPI(today);
    setAvailableTimes(times);
  };

  const updateTimes = (newDate) => {
    const times = fetchAPI(new Date(newDate));
    setAvailableTimes(times);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
    updateTimes(newDate);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="booking">
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          value={date}
          onChange={handleDateChange}
          type="date"
          id="res-date"
        />
        <label htmlFor="res-time">Choose time</label>
        <select value={selectedTime} onChange={handleTimeChange} id="res-time">
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          value={guests}
          onChange={handleGuestsChange}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select value={occasion} onChange={handleOccasionChange} id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value={submitForm} />
      </form>
    </div>
  );
};

export default BookingForm;
