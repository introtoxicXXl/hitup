import React from 'react';
import Button from '../Button/Button';
import headerObject from '../../img/heade-object.png';
import headerImg from '../../img/header-img.png';
import './Banner.css';

const Banner = () => {
  return (
    <section id="banner">
        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 banner">
          <div className="col p-0">
            <div className="home-left d-flex align-items-center h-100">
              <div className="home-info">
                <h1 className="home-title">Perfect Workout <br /> Coach For <span style={{ 'color': '#8368FF' }}>Body Shape</span> </h1>
                <p className='mb-4'><span className='fw-bold' style={{ color: '#8368FF' }}>HitUp </span>is more than your average gym.It's boutique fitness remained.
                  We've transformed the fitness experience to encompass digital and in-studio offerings to keep you at your best anywhere,anytime.</p>
                <Button button='Learn-More'></Button>
              </div>
            </div>
          </div>
          <div className="col p-0 d-lg-block d-md-block d-sm-none d-none">
            <div className="home-right h-100 position-relative">
              <img className='header-object img-fluid' src={headerObject} alt="" />
              <img className='header-img img-fluid' src={headerImg} alt="" />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Banner;