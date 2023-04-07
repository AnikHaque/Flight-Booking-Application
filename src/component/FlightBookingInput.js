import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flightBooking } from "../redux/flightBooking/actions";

const FlightBookingInput = () => {
  const bData = useSelector((state) => state.bookingData);
  const dispatch = useDispatch();
  const [destFrom, setDestFrom] = useState("");
  const [destTo, setDestTo] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [fClass, setFClass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    const bookingData = { id, destFrom, destTo, date, guests, fClass };
    dispatch(flightBooking(bookingData));
    event.target.reset();
  };
  return (
    <div>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form onSubmit={handleSubmit} className="first-hero lws-inputform">
            {/* <!-- From --> */}
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="from"
                  id="lws-from"
                  required
                  onChange={(e) => setDestFrom(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* <!-- To --> */}
            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="to"
                  id="lws-to"
                  required
                  onChange={(e) => setDestTo(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* <!-- Date --> */}
            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* <!-- Guests --> */}
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (1).svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="guests"
                  id="lws-guests"
                  required
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            {/* <!-- Class --> */}
            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (3).svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="ticketClass"
                  id="lws-ticketClass"
                  required
                  onChange={(e) => setFClass(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button
              className={bData.length >= 3 ? "buttonDisable" : "addCity"}
              disabled={bData?.length >= 3 ? true : false}
              type="submit"
              id="lws-addCity"
            >
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book Now</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingInput;
