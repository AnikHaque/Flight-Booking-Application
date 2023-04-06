import { createStore } from "redux";
import FlightBookingReducer from "./flightBooking/flightBookingReducer";

const store = createStore(FlightBookingReducer);

export default store;
