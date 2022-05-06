import React from 'react';
import aboutImg from '../../img/about-img.png';
import circleLine from '../../img/circle-line.png';
import './AboutGym.css'

const AboutGym = () => {
  
  return (
    <div>
    {/* about gym section */}
      <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1 about-gym">
        <div className="col">
          <div className='about-gym-img'>
            <img className='' src={aboutImg} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="about-gym-info">
            <h2 className='mt-lg-0 mt-md-5 mt-sm-5 mt-5 fs-2 text-lg-start text-md-center text-sm-center text-center'>Let Us Find The Perfect Workout For You!!!</h2>
            <img className='mb-4 mt-2 d-lg-inline d-md-block d-sm-block d-block mb-md-5 mb-sm-4 m-md-auto m-sm-auto m-auto' src={circleLine} alt="" />
            <p>There is no limit to what you are capable of, physically and mentally.These Dance, HIIT, and Tone workouts are led by Broadway performers, professional dancers, and former Rockettes - all trainers certified through nationally accredited organizations. <br /> <br /> Years of pushing our limits in performance have given us an intuitive understanding of what it takes to get to a high level of athleticism and strength, which we share with our clients.Join our live Zoom classes, on demand subscription, or set up a private session!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGym;