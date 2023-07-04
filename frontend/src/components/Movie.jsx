import React, { memo } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setMovie } from '../redux/bookmovieSlice';
import "./movie.css"
const Movie = () => {

  const dispatch = useDispatch();

  const updatemoviebookname = (e) => {
    dispatch(setMovie(e.target.value));
  
 
  };

  return (
    <div className='cover '>
  
        
          <h3>Select a Movie</h3>
          <div className="movie">
            {/*radio box for showing Movies name */}
            <input
              type="radio"
              class="btn-check"
              name="movie"
              value="Suraj par mangal bhari"
              id="1"
              
              autocomplete="off"
              onChange={(e)=>updatemoviebookname(e)}

            />
            <label class="btn btn-outline-danger" for="1">
              Suraj par mangal bhari
            </label>

            <input
              type="radio"
              class="btn-check"
              name="movie"
              id="2"
             value="Tenet"
              autocomplete="off"
              onChange={(e)=>updatemoviebookname(e)}
            />
            <label class="btn btn-outline-danger" for="2">
              Tenet
            </label>

            <input
             type="radio"
              class="btn-check"
              name="movie"
              id="3"
              value="The war with grandpa"
              autocomplete="off"
              onChange={(e)=>updatemoviebookname(e)}
            />
            <label class="btn btn-outline-danger" for="3">
              The war with grandpa
            </label>

            <input
             type="radio"
              class="btn-check"
              name="movie"
              id="4"
              value="The perosnal history of David Copperfield"
              autocomplete="off"
              onChange={(e)=>updatemoviebookname(e)}
            />
            <label class="btn btn-outline-danger" for="4">
              The perosnal history of David Copperfield
            </label>
          </div>
          
    </div>
  )
}

export default Movie
