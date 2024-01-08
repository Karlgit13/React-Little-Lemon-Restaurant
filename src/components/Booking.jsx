import React, { useState } from "react";

const Booking = () => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [selectedTime, setSelectedTime] = useState("");
  const availableTimes = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ])[0];

  const handleDateChange = (event) => {
    setDate(event.target.value);
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

  return (
    <div>
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
          <select
            value={selectedTime}
            onChange={handleTimeChange}
            id="res-time"
          >
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
          <select
            value={occasion}
            onChange={handleOccasionChange}
            id="occasion"
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
