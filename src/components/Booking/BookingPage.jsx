import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_GUESTS":
      return { ...state, guests: action.payload };
    case "SET_OCCASION":
      return { ...state, occasion: action.payload };
    case "SET_SELECTED_TIME":
      return { ...state, selectedTime: action.payload };
    default:
      return state;
  }
};

const BookingPage = () => {
  const [formData, dispatch] = useReducer(formReducer, {
    date: "",
    guests: 1,
    occasion: "Birthday",
    selectedTime: "",
  });

  return (
    <div>
      
      <section>
        <BookingForm formData={formData} dispatch={dispatch} />
      </section>
    </div>
  );
};

export default BookingPage;
