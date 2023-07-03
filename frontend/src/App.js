import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import Movie from "./components/Movie";
import Seats from "./components/Seats";
import Time from "./components/Time";
import Header from "./components/Header";
import "./App.css";
import { postBookmovie, setValidate } from "./redux/bookmovieSlice";
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const valid = useSelector((state) => state.bookmovie.valid);
  const [isModalOpen, setModalOpen] = useState(false);

  const postBook = () => {
    dispatch(postBookmovie());
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div>
      <div className="animation"></div>
      <div className="overlay"></div>
      <div className="row  main">
        <div className="head">
          <Header />
        </div>
        <div className="col-lg-8  background">
          <Movie />
          <Time />
          <Seats />
          <button className="Btn" onClick={postBook}>Book now</button>
        </div>
        <div className="col-lg-4 background">
          <BookDetails />
        </div>
      </div>
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
