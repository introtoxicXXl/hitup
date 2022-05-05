import React from 'react';
import picture from './404.svg';
import './PageNotFound.css';
const PageNotFound = () => {
  return (
    <div className='not-found'>
      <img src={picture} alt="" />
    </div>
  );
};

export default PageNotFound;