import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import ConfirmPage from "./components/ConfirmPage";
import BookingComplete from "./components/BookingComplete";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmPage" element={<ConfirmPage />} />
        <Route path="/bookingComplete" element={<BookingComplete />} />
        {/* Add additional routes here */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
