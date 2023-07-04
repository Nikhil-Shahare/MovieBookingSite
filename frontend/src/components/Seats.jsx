import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../redux/store';
import { setSeats } from '../redux/bookmovieSlice';
import "./Seats.css";

const Seats = () => {
  console.log("seatstore", store.getState());
  const Bookmovie = useSelector((state) => state.bookmovie.Bookmovie);
  console.log("seatbook", Bookmovie);

  const dispatch = useDispatch();

  function seldeselectseats(e) {
    const val = Bookmovie.seats[e.target.name];
    console.log("val", val);
    if (Number(val) > 0) {
      dispatch(setSeats({ [e.target.name]: 0 }));
      console.log("seatstore", store.getState());
    } else {
      // Handle case when the seat is already deselected
    }
  }

  function selectseats(e) {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(setSeats({ [e.target.name]: value }));
    console.log("seatstore", store.getState());
  }

  return (
    <div>
      <div className="border rounded border-dark mb-1 slots">
        <h3>Select The Seats</h3>
        {/* Checkboxes for showing seat types */}
        <input
          type="checkbox"
          class="btn-check "
          name="A1"
          id="9"
          autocomplete="off"
          onChange={(e) => seldeselectseats(e)}
        />
        <label class="btn btn-outline-danger .d-flex flex-row" for="9">
          <div className="m-0 p-0">Type A1</div>
          <div><input type='number' name="A1" onChange={(e) => selectseats(e)} /></div>
        </label>

        {/* Repeat the above pattern for the remaining seat types */}

        <input
          type="checkbox"
          class="btn-check"
          name="A2"
          id="10"
          autocomplete="off"
          onChange={(e) => seldeselectseats(e)}
        />
        <label class="btn btn-outline-danger .d-flex flex-row" for="10">
          <div className="m-0 p-0">Type A2</div>
          <div><input type='number' name="A2" onChange={(e) => selectseats(e)} /></div>
        </label>

        {/* ... */}

        <input
          type="checkbox"
          class="btn-check"
          name="D2"
          id="14"
          autocomplete="off"
          onChange={(e) => seldeselectseats(e)}
        />
        <label class="btn btn-outline-danger .d-flex flex-row" for="14">
          <div className="m-0 p-0">Type D2</div>
          <div><input name="D2" type='number' onChange={(e) => selectseats(e)} /></div>
        </label>
      </div>
    </div>
  );
};

export default Seats;
