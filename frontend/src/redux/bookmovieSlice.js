import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state for the bookMovie slice
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

// Create a slice for the bookMovie state
const bookMovieSlice = createSlice({
  name: 'bookMovie',
  initialState,
  reducers: {
    // Action to set the selected movie and reset the validation message
    setMovie: (state, action) => {
      state.Bookmovie.movie = action.payload;
      state.valid = "";
    },
    // Action to set the selected seats and reset the validation message
    setSeats: (state, action) => {
      state.Bookmovie.seats = {
        ...state.Bookmovie.seats,
        ...action.payload
      };
      state.valid = "";
    },
    // Action to set the selected slot and reset the validation message
    setSlot: (state, action) => {
      state.Bookmovie.slot = action.payload;
      state.valid = "";
    },
    // Action to set the latest booking data
    setLatestBook: (state, action) => {
      state.latestBook = action.payload;
    },
    // Action to set the validation message
    setValidate: (state, action) => {
      state.valid = action.payload;
    }
  },
});

// Export the individual actions from the slice
export const { setMovie, setSeats, setSlot, setLatestBook, setValidate } = bookMovieSlice.actions;

// Function to validate the bookmovie state
const Validation = (valBookmovie) => {
  if(valBookmovie.movie === "" &&     (valBookmovie.seats.A1 === 0 &&
    valBookmovie.seats.A2 === 0 &&
    valBookmovie.seats.A3 === 0 &&
    valBookmovie.seats.A4 === 0 &&
    valBookmovie.seats.D1 === 0 &&
    valBookmovie.seats.D2 === 0) && valBookmovie.slot === "" ) {
    return "fields name can't be blank";
  }
 else if (valBookmovie.movie === "") {
    return "Movie name can't be blank";
  } else if (valBookmovie.slot === "") {
    return "Time Slot  can't be blank";
  } else if (
    (valBookmovie.seats.A1 === 0 &&
    valBookmovie.seats.A2 === 0 &&
    valBookmovie.seats.A3 === 0 &&
    valBookmovie.seats.A4 === 0 &&
    valBookmovie.seats.D1 === 0 &&
    valBookmovie.seats.D2 === 0) 
  ) {
    return "Seat name can't be blank";
  }
    else if (
    (valBookmovie.seats.A1 < 1 &&
    valBookmovie.seats.A2 < 1 &&
    valBookmovie.seats.A3 < 1 &&
    valBookmovie.seats.A4 < 1 &&
    valBookmovie.seats.D1 < 1 && valBookmovie.seats.D2 < 1) 
  ) {
    return "Seat name can't be negative";
  }
  
  
  else {
    return "";
  }
}

// Async action to post the bookmovie data
export const postBookmovie = () => {
  return async (dispatch, getState) => {
    try {
      const valBookmovie = await getState().bookmovie.Bookmovie;
      const val = Validation(valBookmovie);

      if (val === "") {
        try {
          const response = await axios.post('https://spring-green-turtle-hat.cyclic.app/api/booking', valBookmovie);
          dispatch(setLatestBook(response.data));
          dispatch(setValidate(""));
          window.location.reload(); // Refresh the page after successful booking
        } catch (error) {
          console.log(error);
        }
      } else {
        dispatch(getlatestbook());
        dispatch(setValidate(val));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Action to get the latest booking data
export const getlatestbook = () => {
  return (dispatch) => {
    axios
      .get("https://spring-green-turtle-hat.cyclic.app/api/booking") // Updated backend API URL
      .then((response) =>{
        dispatch(setLatestBook(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default bookMovieSlice.reducer;

