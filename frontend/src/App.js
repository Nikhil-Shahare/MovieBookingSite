import React, { useCallback, useEffect, useState } from "react";
import BookDetails from "./components/BookDetails"; //Component for showing all the booking details
import Movie from "./components/Movie"; //Component for showing all the movies name
import Seats from "./components/Seats"; //Component for showing all the seats details
import Time from "./components/Time"; //Component for showing all the movies timing 
import Header from "./components/Header";
import "./App.css"
import axios from 'axios';
import background from "../src/assets/infinite.jpg"
import { postBookmovie, Validation } from "./redux/bookmovieSlice";
import {  useSelector,useDispatch } from 'react-redux';
//import Validation from "./Validation";
function App() {
  const [checkval,setval]=useState(null);
  const dispatch =useDispatch();




  // const Bookmovie = useSelector((state) =>state.bookmovie.Bookmovie);
//   console.log("appbook",Bookmovie);


const postBook = () => {

 
  dispatch(postBookmovie());

  
  
}
const valid = useSelector((state) =>state.bookmovie.valid);



return (
  <div >

<div className="animation"></div>

      <div className="overlay"></div>
   <div className="row background main">
   <div className="background ">

   <Header/>
   </div>
        <div className="col-lg-8 background">
        
        {valid!=="false"?valid:""}
          {/*Component Contain all the movies name */}
          <Movie  />
          {/*Component Contain all the movies time */}
          <Time />
          {/*Component Contain all the movie Seats */}
          <Seats />
       <button className="Btn" onClick={postBook}>Book now</button>
        </div>
        <div className="col-lg-4  background">
          {/*Component Contain all the booking details */}
          <BookDetails/>
        </div>
      </div>
  </div>
  );
}

export default App;