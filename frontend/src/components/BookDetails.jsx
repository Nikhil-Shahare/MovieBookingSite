import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getlatestbook } from '../redux/bookmovieSlice';

const BookDetails = () => {
  const dispatch = useDispatch();
  const [getlatest, setLatestBook] = useState(null);

  useEffect(() => {
    dispatch(getlatestbook()); // Dispatch the action to get the latest book details
  }, [dispatch]);

  const lbook = useSelector((state) => state.bookmovie.latestBook); // Retrieve the latest book details from the state
  console.log('lbook', lbook);

  useEffect(() => {
    setLatestBook(lbook); // Update the latest book details in the component state
  }, [lbook]);

  return (
    <>
      <div className=" mt-2 slots d-flex flex-column" style={styles.container}>
        <h3>Last Booking Details:</h3>

        {getlatest !== null ? ( // Check if there are latest booking details available
          <>
            <h5 style={styles.text}>
              <span style={styles.head}>Movie:</span> {getlatest.movie}
            </h5>
            <h5 style={styles.text}>
              <span style={styles.head}>Slot:</span> {getlatest.slot}
            </h5>

            <h5 style={styles.head}>Seats:</h5>
            <h5 style={styles.text}>A1: {getlatest.seats.A1}</h5>
            <h5 style={styles.text}>A2: {getlatest.seats.A2}</h5>
            <h5 style={styles.text}>A3: {getlatest.seats.A3}</h5>
            <h5 style={styles.text}>A4: {getlatest.seats.A4}</h5>
            <h5 style={styles.text}>D1: {getlatest.seats.D1}</h5>
            <h5 style={styles.text}>D2: {getlatest.seats.D2}</h5>
          </>
        ) : getlatest == null ? (
          "no previous booking found" // Display a message if no previous booking is found
        ) : null}
      </div>
    </>
  );
};

const styles = {
  container: {
    color: 'white',
  },
  text: {
    color: 'white',
  },
  head: {
    color: 'red',
    fontSize: '24px',
  },
};

export default BookDetails;
