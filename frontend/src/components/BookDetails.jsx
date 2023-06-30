import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getlatestbook } from '../redux/bookmovieSlice';

const BookDetails = () => {
  const dispatch = useDispatch();
  const [getlatest, setLatestBook] = useState(null);

  useEffect(() => {
    dispatch(getlatestbook());
  }, [dispatch]);

  const lbook = useSelector((state) => state.bookmovie.latestBook);
  console.log('lbook', lbook);

  useEffect(() => {
    setLatestBook(lbook);
  }, [lbook]);

  return (
    <>
      <div className="border rounded border-dark mt-2 slots d-flex flex-column" style={styles.container}>
        <h3>Last Booking Details:</h3>

        {getlatest !== null ? (
          <>
          <h5 style={styles.text}>Movie: {getlatest.movie}</h5>
          <h5 style={styles.text}>Slot: {getlatest.slot}</h5>
          

          <h5 style={styles.text}>Seats:</h5>
            <h5 style={styles.text}>A1: {getlatest.seats.A1}</h5>
            <h5 style={styles.text}>A2: {getlatest.seats.A2}</h5>
            <h5 style={styles.text}>A3: {getlatest.seats.A3}</h5>
            <h5 style={styles.text}>A4: {getlatest.seats.A4}</h5>
            <h5 style={styles.text}>D1: {getlatest.seats.D1}</h5>
            <h5 style={styles.text}>D2: {getlatest.seats.D2}</h5>
          

          </>
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

};

export default BookDetails;
