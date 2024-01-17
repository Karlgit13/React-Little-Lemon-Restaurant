import React, { useEffect, useState } from "react";
import { fetchAPI } from "../../utils/fakeAPI";
import { useNavigate } from "react-router-dom";
import "./booking.css";

const BookingForm = ({ dispatch, formData }) => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    initializeTimes();
  }, []);

  const initializeTimes = () => {
    const today = new Date();
    const times = fetchAPI(today);
    setAvailableTimes(times);
  };

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const updateTimes = (newDate) => {
    const selectedDate = new Date(newDate);
    const today = new Date();
    const noTimes = "Try another Date";

    if (formatDate(selectedDate) >= formatDate(today)) {
      const times = fetchAPI(selectedDate);
      setAvailableTimes(times);
    } else {
      setAvailableTimes([noTimes]);
    }
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    dispatch({ type: "SET_DATE", payload: newDate });
    updateTimes(newDate);
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

  const validateForm = () => {
    const { date, guests } = formData;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    const isDateValid = selectedDate >= today;
    const isGuestsValid = guests >= 1 && guests <= 10;

    setIsValid(isDateValid && isGuestsValid);
  };

  return (
    <div className="booking-form-container">
      <form
        onChange={validateForm}
        onSubmit={handleSubmit}
        className="booking-form"
      >
        <label className="form-label" htmlFor="res-date">
          Choose date
        </label>
        <input
          className="form-input"
          onChange={handleDateChange}
          type="date"
          id="res-date"
        />
        <label className="form-label" htmlFor="res-time">
          Choose time
        </label>
        <select
          className="form-input"
          onChange={handleTimeChange}
          id="res-time"
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label className="form-label" htmlFor="guests">
          Number of guests
        </label>
        <input
          className="form-input"
          onChange={handleGuestsChange}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label className="form-label" htmlFor="occasion">
          Occasion
        </label>
        <select
          className="form-input"
          onChange={handleOccasionChange}
          id="occasion"
        >
          <option className="form-input" value="option1">
            Birthday
          </option>
          <option className="form-input" value="option2">
            Anniversary
          </option>
        </select>
        <input className="form-button" type="submit" disabled={!isValid} />
      </form>
    </div>
  );
};

export default BookingForm;
