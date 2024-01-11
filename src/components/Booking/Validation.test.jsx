import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { BrowserRouter } from "react-router-dom";
import validateGuests from "./testfile";

// test guests
describe("max and min guests attributes", () => {
  it("should have min and max attributes on guests input", () => {
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });
});

describe("validateGuests", () => {
  it("should return true for valid number of guests", () => {
    const isValid = validateGuests(5); // Antag att 5 är ett giltigt antal gäster
    expect(isValid).toBe(true);
  });

  it("should return false for invalid number of guests", () => {
    const isValid = validateGuests(0); // Antag att 0 är ogiltigt
    expect(isValid).toBe(false);
  });
});

// test time
describe("timeInput", () => {
  it("should return true if valid time input", () => {
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );
    const timeInput = screen.getByLabelText(/choose time/i);
    expect(timeInput).toHaveValue("17:00");
  });
});

// test occasion
describe("Occasion", () => {
  it("should have 'Birthday' as a valid option", () => {
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );
    const occasionInput = screen.getByLabelText(/occasion/i);
    const options = Array.from(occasionInput.options).map((opt) => opt.value);
    expect(options.includes("Birthday")).toBeTruthy();
  });

  it("should have 'Anniversary' as a valid option", () => {
    const occasionInput = screen.getByLabelText(/occasion/i);
    const options = Array.from(occasionInput.options).map((opt) => opt.value);
    expect(options.includes("Anniversary")).toBeTruthy();
  });
});
