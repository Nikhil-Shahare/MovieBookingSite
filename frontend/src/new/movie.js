import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMovie } from '../redux/bookmovieSlice';
import store from '../redux/store';
import './movie.css';

const Movie = ({ setBookmovie, Bookmovie }) => {
  const dispatch = useDispatch();

  const updatemoviebookname = (e) => {
    dispatch(setMovie(e.target.value));
    setBookmovie({ ...Bookmovie, [e.target.name]: e.target.value });
  };

  console.log('movstore', store.getState());

  return (
    <div>
      <div className='section'>
        <h3>Select a Movie</h3>
        {/* Custom radio buttons for showing movie names */}
        <div >
          <input
            type="radio"
            name="movie"
            value="Suraj par mangal bhari"
            id="1"
            autoComplete="off"
            onChange={(e) => updatemoviebookname(e)}
          />
          <label htmlFor="1">Suraj par mangal bhari</label>
        </div>

        <div>
          <input
            type="radio"
            name="movie"
            id="2"
            value="Tenet"
            autoComplete="off"
            onChange={(e) => updatemoviebookname(e)}
          />
          <label htmlFor="2">Tenet</label>
        </div>

        <div>
          <input
            type="radio"
            name="movie"
            id="3"
            value="The war with grandpa"
            autoComplete="off"
            onChange={(e) => updatemoviebookname(e)}
          />
          <label htmlFor="3">The war with grandpa</label>
        </div>

        <div>
          <input
            type="radio"
            name="movie"
            id="4"
            value="The perosnal history of David Copperfield"
            autoComplete="off"
            onChange={(e) => updatemoviebookname(e)}
          />
          <label htmlFor="4">The perosnal history of David Copperfield</label>
        </div>
      </div>
    </div>
  );
};

export default Movie;
