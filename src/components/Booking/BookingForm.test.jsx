import { fireEvent, render, screen } from "@testing-library/react";

import BookingForm from "./BookingForm";

test("renders the bookingForm label", () => {
  render(<BookingForm />); // render the component
  const label = screen.getByText(/Choose date/i); // get the label
  expect(label).toBeInTheDocument(); // check if it is in the document
});

test("renders the bookingForm label2", () => {
  render(<BookingForm />); // render the component
  const label = screen.getByText(/Choose time/i); // get the label
  expect(label).toBeInTheDocument(); // check if it is in the document
});
test("renders the bookingForm label3", () => {
  render(<BookingForm />); // render the component
  const label = screen.getByText(/Number of guests/i); // get the label
  expect(label).toBeInTheDocument(); // check if it is in the document
});
test("renders the bookingForm label4", () => {
  render(<BookingForm />); // render the component
  const label = screen.getByText(/Occasion/i); // get the label
  expect(label).toBeInTheDocument(); // check if it is in the document
});
test("allows the user to enter a date", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: "2024-01-01" } });
  expect(dateInput.value).toBe("2024-01-01");
});
test("allows the user to enter the number of guests", () => {
  render(<BookingForm />);
  const guestInput = screen.getByLabelText(/Number of guests/i);
  fireEvent.change(guestInput, { target: { value: 3 } });
  expect(guestInput.value).toBe("3");
});
test("allows the user to select a time", () => {
  render(<BookingForm />);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  fireEvent.change(timeSelect, { target: { value: "19:00" } });
  expect(timeSelect.value).toBe("19:00");
});
test("allows the user to select an occasion", () => {
  render(<BookingForm />);
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });
  expect(occasionSelect.value).toBe("Anniversary");
});
test("submits the correct values", () => {
  // Mock a submission function or ensure the state is correctly passed
  render(<BookingForm />);
  // Set up all inputs
  // Simulate submitting the form
  // Assert that the submission is as expected
});
