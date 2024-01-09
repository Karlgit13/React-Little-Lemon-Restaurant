import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header-Nav/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import BookingPage from "./components/Booking/BookingPage";
import ConfirmPage from "./components/Booking/ConfirmPage";
import BookingComplete from "./components/Booking/BookingComplete";
import Order from "./components/Order/Order";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/order" element={<Order />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confirmPage" element={<ConfirmPage />} />
        <Route path="/bookingComplete" element={<BookingComplete />} />
        {/* Add additional routes here */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
