import React, { memo, useEffect, useState } from 'react'
import axios from 'axios';
import {  useSelector,useDispatch } from 'react-redux';
import { getlatestbook  } from "../redux/bookmovieSlice";
const BookDetails = () => {
   const dispatch = useDispatch();
   const [getlatest,setlatestbook]=useState(null);


  useEffect(()=>{
    dispatch(getlatestbook());
  
  },[dispatch])
  const lbook = useSelector((state) =>state.bookmovie.latestBook);
  console.log("lbook",lbook);
  useEffect(()=>{
    setlatestbook(lbook)
  },[lbook])

  return (
    <>
    <div className='border rounded border-dark mt-2 slots '>
    <h3>Last Booking Details:</h3>
    
    <h5>Seats</h5>
    {getlatest!==null?
    <>
       <h5>A1: {getlatest.seats.A1}</h5>
       <h5>A2: {getlatest.seats.A2}</h5>
       <h5>A3: {getlatest.seats.A3}</h5>
       <h5>A4: {getlatest.seats.A4}</h5>
       <h5>D1: {getlatest.seats.D1}</h5>
       <h5>D2: {getlatest.seats.D2}</h5>
       
       <h5>slot: {getlatest.slot}</h5>
       <h5>movie: {getlatest.movie} </h5>
       </> : ""}
 
    </div>
    </>
  )
}

export default BookDetails