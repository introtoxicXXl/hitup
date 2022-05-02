import './footer.css';

const Footer = () => {

  return (
    <footer style={{'backgroundColor': '#514196'}} className='py-4 d-flex align-items-center justify-content-center'>
      <p className='text-center mb-0 text-light'>&#169;{new Date().getFullYear()} HitUp All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;