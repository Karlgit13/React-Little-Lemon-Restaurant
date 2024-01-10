import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmPage = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  if (!formData) {
    return <div>Nothing to show for.</div>;
  }

  return (
    <div className="bookingConfirmed">
      <h2>Please confirm your information.</h2>
      {Object.entries(formData).map(([key, value]) => (
        <p key={key}>
          <strong>{key}</strong> {value}
        </p>
      ))}
    </div>
  );
};

export default ConfirmPage;
