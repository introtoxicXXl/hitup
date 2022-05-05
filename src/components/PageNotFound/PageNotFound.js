import React from 'react';
import picture from './404.svg';
import './PageNotFound.css';
const PageNotFound = () => {
  return (
    <div className='not-found d-flex justify-content-center'>
      <img className='w-50' src={picture} alt="" />
    </div>
  );
};

export default PageNotFound;