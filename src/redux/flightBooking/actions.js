import { DELETEFLIGHTBOOKING, FLIGHTBOOKING } from "./actionTypes";

export const flightBooking = (bookingData) => {
  return {
    type: FLIGHTBOOKING,
    payload: bookingData,
  };
};
export const flightBookingDelete = (id) => {
  return {
    type: DELETEFLIGHTBOOKING,
    payload: id,
  };
};
