import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='container'>
      <h1 className='heading'>
        <span>BookThat</span>
        <span className='highlight'>Show!!</span>
      </h1>
    </div>
  );
};

export default Header;
