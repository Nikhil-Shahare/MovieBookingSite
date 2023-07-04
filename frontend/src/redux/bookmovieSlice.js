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
  latestBook: null,
  valid: "false",
};

const bookMovieSlice = createSlice({
  name: 'bookMovie',
  initialState,
  reducers: {
    // Action to set the selected movie
    setMovie: (state, action) => {
      state.Bookmovie.movie = action.payload;
      state.valid = "";
    },
    // Action to set the selected seats
    setSeats: (state, action) => {
      state.Bookmovie.seats = {
        ...state.Bookmovie.seats,
        ...action.payload
      };
      state.valid = "";
    },
    // Action to set the selected time slot
    setSlot: (state, action) => {
      state.Bookmovie.slot = action.payload;
      state.valid = "";
    },
    // Action to set the latest booking details
    setLatestBook: (state, action) => {
      state.latestBook = action.payload;
    },
    // Action to set the validation message
    setValidate: (state, action) => {
      state.valid = action.payload;
    }
  },
});

// Extracted validation logic into a separate function
const Validation = (valBookmovie) => {
  if (valBookmovie.movie === "") {
    return "movie name can't be blank";
  } else if (valBookmovie.slot === "") {
    return "slot name can't be blank";
  } else if (
    valBookmovie.seats.A1 === 0 &&
    valBookmovie.seats.A2 === 0 &&
    valBookmovie.seats.A3 === 0 &&
    valBookmovie.seats.A4 === 0 &&
    valBookmovie.seats.D1 === 0 &&
    valBookmovie.seats.D2 === 0
  ) {
    return "seat name can't be blank";
  } else {
    return "";
  }
};

// Async action to post the booking details to the backend API
export const postBookmovie = () => {
  return async (dispatch, getState) => {
    try {
      const valBookmovie = await getState().bookmovie.Bookmovie;
      const val = Validation(valBookmovie);

      if (val === "") {
        const response = await axios.post('https://spring-green-turtle-hat.cyclic.app/api/booking', valBookmovie);
        dispatch(setLatestBook(response.data));
        dispatch(setValidate(""));
        window.location.reload();
      } else {
        dispatch(getlatestbook());
        dispatch(setValidate(val));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Async action to fetch the latest booking details from the backend API
export const getlatestbook = () => {
  return (dispatch) => {
    axios
      .get("https://spring-green-turtle-hat.cyclic.app/api/booking")
      .then((response) => {
        dispatch(setLatestBook(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const { setMovie, setSeats, setSlot, setLatestBook, setValidate } = bookMovieSlice.actions;

export default bookMovieSlice.reducer;
