// Import necessary modules and components from React and other files
import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import Movie from "./components/Movie";
import Seats from "./components/Seats";
import Time from "./components/Time";
import Header from "./components/Header";
import "./App.css";

// Import Redux related functions and components
import { postBookmovie, setValidate } from "./redux/bookmovieSlice";
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // Initialize Redux dispatcher and access the 'valid' state from Redux store
  const dispatch = useDispatch();
  const valid = useSelector((state) => state.bookmovie.valid);

  // Define local state 'isModalOpen' to manage the visibility of the modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to handle the book button click
  const postBook = () => {
    // Dispatch the 'postBookmovie' action to perform the booking
    dispatch(postBookmovie());
    // Open the modal after booking
    setModalOpen(true);
  }

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  }

  // Render the main components of the app
  return (
    <div>
      {/* Animated background elements */}
      <div className="animation"></div>
      <div className="overlay"></div>

      {/* Main layout */}
      <div className="row  main">
        {/* Header */}
        <div className="head">
          <Header />
        </div>

        {/* Movie details section */}
        <div className="col-lg-8  background">
          <Movie /> {/* Display selected movie details */}
          <Time /> {/* Display available movie timings */}
          <Seats /> {/* Display available seats for booking */}
          <button className="Btn" onClick={postBook}>Book now</button> {/* Book button */}
        </div>

        {/* Book details section */}
        <div className="col-lg-4 background">
          <BookDetails /> {/* Display details of the booked movie */}
        </div>
      </div>

      {/* Modal for displaying validation errors after booking */}
      {valid !== "" && isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <div className="modal-error">Oops!!</div>
            <div className="validation-error">{valid}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
