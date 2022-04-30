import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './service.css'
import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button';

const Service = ({ service }) => {
  const { name, price, description, img, points } = service;
  return (
    <div className="col">
      <div className="card h-100 p-4">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center fw-bold fs-3 my-3" style={{ 'color': '#4b31bf' }}>{name} <span className='price-tag'>/{price} per Week</span> </h5>
          <p className="card-text text-center mb-4" style={{ "fontWeight": "600", "fontSize": "16px" }}>{description}</p>
          {
            points.map(point => <li className='list-unstyled my-3 fs-6'> <FontAwesomeIcon className='icon me-2 fs-6' icon={faCheckCircle} /> {point}</li>)
          }
        </div>
        <div className= 'm-auto'>
        <Button button={"Check Out"}></Button>
        </div>
      </div>
    </div>
  );
}

export default Service;