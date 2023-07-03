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
  valid:"false",
};

const bookMovieSlice = createSlice({
  name: 'bookMovie',
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.Bookmovie.movie = action.payload;
      state.valid="";
    },
    setSeats: (state, action) => {
      state.Bookmovie.seats = {
        ...state.Bookmovie.seats,
        ...action.payload
      
      };
      state.valid="";
    },
    setSlot: (state, action) => {
      state.Bookmovie.slot = action.payload;
      state.valid="";
    },
    setLatestBook: (state, action) => {
      state.latestBook = action.payload;
   
    },
    setValidate:(state,action)=>{
      state.valid=action.payload;
          }
  },

});

export const { setMovie, setSeats, setSlot, setLatestBook,setValidate } = bookMovieSlice.actions;
const Validation=(valBookmovie)=>{
  //  console.log("valslot",valBookmovie.slot);
  if(valBookmovie.movie===""){
    
    return "movie name can't be blank"
    
  }
  else if(valBookmovie.slot==="")
  {
    
    return "slot name can't be blank" 
  }
  else if(valBookmovie.seats.A1===0 && valBookmovie.seats.A2===0 && 
    valBookmovie.seats.A3===0 && valBookmovie.seats.A4===0
    && valBookmovie.seats.D1===0 && valBookmovie.seats.D2===0)
  {

    return "seat name can't be blank" 
  }
  else{
  return "";
  }
}

export const postBookmovie = () => {
  return async (dispatch, getState) => {
    console.log("getstate",getState().bookmovie);
 
    try{
      const valBookmovie = await getState().bookmovie.Bookmovie;
      console.log("slicebook",valBookmovie)
      const val= Validation(valBookmovie);
      
      if(val==="")
      {
       try {
         const response = await 
         axios.post('https://spring-green-turtle-hat.cyclic.app/api/booking',
         valBookmovie);
         console.log(response);
         dispatch(setLatestBook(response.data));
     
         dispatch(setValidate(""));
            window.location.reload();
    
       } catch (error) {
         console.log(error);
       }
      }
      else{
        console.log("getstate1",val);
        dispatch(getlatestbook());
       dispatch(setValidate(val));
  
   
      }
    }
    catch(error){

    }

  
  };
};

export const getlatestbook = () => {
  return (dispatch) => {
    axios
      .get("https://spring-green-turtle-hat.cyclic.app/api/booking")  // Updated backend API URL
      .then((response) => {
        dispatch(setLatestBook(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default bookMovieSlice.reducer;
