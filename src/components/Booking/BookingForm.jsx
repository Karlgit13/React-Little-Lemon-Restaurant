import React, { useEffect, useState } from "react";
import { fetchAPI } from "../../utils/fakeAPI";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ dispatch, formData }) => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    initializeTimes();
  }, []);

  const initializeTimes = () => {
    const today = new Date();
    const times = fetchAPI(today);
    setAvailableTimes(times);
  };

  // const updateTimes = (newDate) => {
  //   const times = fetchAPI(new Date(newDate));
  //   setAvailableTimes(times);
  // };

  const handleDateChange = (event) => {
    dispatch({ type: "SET_DATE", payload: event.target.value });
  };

  const handleGuestsChange = (event) => {
    dispatch({ type: "SET_GUESTS", payload: event.target.value });
  };

  const handleOccasionChange = (event) => {
    dispatch({ type: "SET_OCCASION", payload: event.target.value });
  };

  const handleTimeChange = (event) => {
    dispatch({ type: "SET_SELECTED_TIME", payload: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/confirmPage", { state: { formData } });
  };

  return (
    <div className="booking">
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input onChange={handleDateChange} type="date" id="res-date" />
        <label htmlFor="res-time">Choose time</label>
        <select onChange={handleTimeChange} id="res-time">
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          onChange={handleGuestsChange}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select onChange={handleOccasionChange} id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default BookingForm;
