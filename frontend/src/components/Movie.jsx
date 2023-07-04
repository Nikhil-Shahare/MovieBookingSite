import React, { memo } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setMovie } from '../redux/bookmovieSlice';
import "./movie.css";

const Movie = () => {
  const dispatch = useDispatch();

  // Event handler for updating the selected movie
  const updatemoviebookname = (e) => {
    dispatch(setMovie(e.target.value)); // Dispatch the action to update the selected movie
  };

  return (
    <div className='border rounded border-dark mb-1'>
      <h3>Select a Movie</h3>
      <div className="movie">
        {/* Radio buttons for displaying movie names */}
        <input
          type="radio"
          class="btn-check"
          name="movie"
          value="Suraj par mangal bhari"
          id="1"
          autocomplete="off"
          onChange={(e) => updatemoviebookname(e)}
        />
        <label class="btn btn-outline-danger" for="1">
          Suraj par mangal bhari
        </label>

        {/* Repeat the same structure for other movie options */}

      </div>
    </div>
  );
};

export default Movie;
