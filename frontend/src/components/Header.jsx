import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='container'>
      <h1 className='heading'>
        <span>BookThat</span> {/* Display the "BookThat" text */}
        <span className='highlight'>Show!!</span> {/* Display the "Show!!" text with highlight */}
      </h1>
    </div>
  );
};

export default Header;
