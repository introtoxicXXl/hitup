import { useState, useEffect } from 'react';
import './Home.css';
import AboutGym from '../AboutGym/AboutGym';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <section id="banner">
        <Banner></Banner>
      </section>
      <section id="about-gym" className='container'>
        <AboutGym></AboutGym>
      </section>
      <section id="services" className='container'>
        <Services services={services}></Services>
      </section>
    </div>
  );
};

export default Home;