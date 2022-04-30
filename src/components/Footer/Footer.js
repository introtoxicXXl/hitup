import './footer.css';

const Footer = () => {

  return (
    <footer style={{'backgroundColor': 'rgba(66, 25, 97, 0.6)'}} className='py-4 d-flex align-items-center justify-content-center'>
      <p className='text-center'>&#169;{new Date().getFullYear()} <span style={{'color':'#4b31bf'}}>HitUp</span> All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;