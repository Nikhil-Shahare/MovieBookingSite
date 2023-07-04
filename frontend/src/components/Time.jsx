import React, { memo } from 'react';
import { setSlot } from '../redux/bookmovieSlice';
import { useDispatch } from 'react-redux';

import "./Time.css";

const Time = () => {
  const dispatch = useDispatch();

  // Function to handle updating the time slot
  const updatetimeslot = (e) => {
    dispatch(setSlot(e.target.value));
  };

  return (
    <div>
      <div className="border rounded border-dark mb-1 slots">
        <h3>Select a Time Slot</h3>
        {/* Radio buttons for showing movie time slots */}
        <input
          type="radio"
          class="btn-check"
          name="slot"
          id="5"
          autocomplete="off"
          value="10:00 AM"
          onChange={(e) => updatetimeslot(e)}
        />
        <label class="btn btn-outline-danger" for="5">
          10:00 AM
        </label>

        <input
          type="radio"
          class="btn-check"
          name="slot"
          id="6"
          autocomplete="off"
          value="01:00 PM"
          onChange={(e) => updatetimeslot(e)}
        />
        <label class="btn btn-outline-danger" for="6">
          01:00 PM
        </label>

        <input
          type="radio"
          class="btn-check"
          name="slot"
          id="7"
          autocomplete="off"
          value="03:00 PM"
          onChange={(e) => updatetimeslot(e)}
        />
        <label class="btn btn-outline-danger" for="7">
          03:00 PM
        </label>

        <input
          type="radio"
          class="btn-check"
          name="slot"
          id="8"
          autocomplete="off"
          value="08:00 PM"
          onChange={(e) => updatetimeslot(e)}
        />
        <label class="btn btn-outline-danger" for="8">
          08:00 PM
        </label>
      </div>
    </div>
  );
};

export default Time;
