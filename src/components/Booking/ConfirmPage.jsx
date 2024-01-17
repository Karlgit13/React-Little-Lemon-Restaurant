import React from "react";
import { useLocation } from "react-router-dom";
import "./booking.css";

const ConfirmPage = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  if (!formData) {
    return <div>Nothing to show for.</div>;
  }

  return (
    <div className="booking-confirm">
      <h2 className="confirm-title">Please confirm your information.</h2>
      {Object.entries(formData).map(([key, value]) => (
        <p key={key}>
          <strong>{key}</strong>:{" "}
          <span
            style={{
              color: "#edefee",
              fontSize: "18px",
              textDecoration: "underline",
              fontWeight: "700",
            }}
          >
            {value}
          </span>
        </p>
      ))}

      <button className="confirm-button" aria-label="Confirm Booking">
        Confirm
      </button>
    </div>
  );
};

export default ConfirmPage;
