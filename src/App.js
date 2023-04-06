import "./App.css";
import FlightBooking from "./component/FlightBooking";
import FlightBookingInput from "./component/FlightBookingInput";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <div className="">
      <Provider store={store}>
        <FlightBookingInput />
        <FlightBooking />
      </Provider>
    </div>
  );
}

export default App;
