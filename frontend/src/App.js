import React, { useCallback, useEffect, useState } from "react";
import BookDetails from "./components/BookDetails"; //Component for showing all the booking details
import Movie from "./components/Movie"; //Component for showing all the movies name
import Seats from "./components/Seats"; //Component for showing all the seats details
import Time from "./components/Time"; //Component for showing all the movies timing 
import store from './redux/store';
import axios from 'axios';
import { postBookmovie,getlatestbook  } from "./redux/bookmovieSlice";
import {  useSelector,useDispatch } from 'react-redux';

function App() {
  const dispatch =useDispatch();
  console.log("store1",store.getState())

 const Bookmovie = useSelector((state) =>state.bookmovie.Bookmovie);
  console.log("appbook",Bookmovie);


const postBook = () => {
  dispatch(postBookmovie());
 
   
  // console.log("appbook",Bookmovie);
  // console.log("bookanewmovie",Bookmovie);
  // axios.post('http://localhost:8000/api/booking',Bookmovie)
  //   .then((response) => {
  // getlatestbook();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

 
console.log("latest");
  return (
 
    <div className="main">
   
    <div className="div--header ">

    <h3 className="header">BookThatShow !!</h3>
    </div>
  
      <div className="row">
        <div className="col-lg-8 ">
          {/*Component Contain all the movies name */}
          <Movie className="slots "  />
          {/*Component Contain all the movies time */}
          <Time className="slots " />
          {/*Component Contain all the Seats */}
          <Seats className="slots "/>
        </div>
        <div className="col-lg-4 ">
          {/*Component Contain all the booking details */}
          <BookDetails className="slots "/>
        </div>
      </div>
      <button className="book" onClick={postBook}>Book now</button>
    </div>
  );
}

export default App;
