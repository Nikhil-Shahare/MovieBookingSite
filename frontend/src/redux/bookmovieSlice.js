import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  Bookmovie: {
    movie: "",
    seats: {
      A1: 0,
      A2: 0,
      A3: 0,
      A4: 0,
      D1: 0,
      D2: 0
    },
    slot: ""
  },
  latestBook: null
};

const bookMovieSlice = createSlice({
  name: 'bookMovie',
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.Bookmovie.movie = action.payload;
    },
    setSeats: (state, action) => {
      state.Bookmovie.seats = {
        ...state.Bookmovie.seats,
        ...action.payload
      };
    },
    setSlot: (state, action) => {
      state.Bookmovie.slot = action.payload;
    },
    setLatestBook: (state, action) => {
      state.latestBook = action.payload;
    }
  },
});

export const { setMovie, setSeats, setSlot, setLatestBook } = bookMovieSlice.actions;

export const postBookmovie = () => {
  return (dispatch, getState) => {
    console.log("getstate", getState().bookmovie);
    const Bookmovie = getState().bookmovie.Bookmovie;

    axios
      .post('https://bookingbackend-247s.onrender.com/api/booking', Bookmovie)  // Updated backend API URL
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getlatestbook = () => {
  return (dispatch) => {
    axios
      .get('https://bookingbackend-247s.onrender.com/api/booking')  // Updated backend API URL
      .then((response) => {
        dispatch(setLatestBook(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default bookMovieSlice.reducer;
