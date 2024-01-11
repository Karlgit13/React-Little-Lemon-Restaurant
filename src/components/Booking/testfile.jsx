// eslint-disable-next-line
const validateGuests = (guests) => {
  const numGuests = parseInt(guests, 10);
  return numGuests >= 1 && numGuests <= 10;
};

export default validateGuests;
