import { DELETEFLIGHTBOOKING, FLIGHTBOOKING } from "./actionTypes";

const initialState = {
  bookingData: [],
};

const FlightBookingReducer = (state = initialState, action) => {
  const data = state.bookingData;
  switch (action.type) {
    case FLIGHTBOOKING:
      // console.log(...state.bookingData, action.payload);
      return {
        ...state,
        bookingData: [...state.bookingData, action.payload],
      };
    case DELETEFLIGHTBOOKING:
      return {
        ...state,
        bookingData: data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default FlightBookingReducer;
