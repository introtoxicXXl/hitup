import React from 'react';

import Service from '../Service/Service';
import './Services.css'

const Services = ({services}) => {

  return (
    <div>
    {/* services section */}
    <h2 className='text-center mb-5'>Services</h2>
      <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4 services-group">
    {
      services.map(service=><Service key={service.id} service={service}></Service>)
    }
      </div>
    </div>
  );
};

export default Services;