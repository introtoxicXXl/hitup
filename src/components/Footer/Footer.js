import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <div>
        {/* footer section */}
            <footer class="footer">
                <div class="footer-left col-md-4 col-sm-6">
                    <p class="about">
                        <span> About This services</span> You will get amazing services related to body fitness and yoga at amazing prices. Provides best trainer in town.
                    </p>
                </div>
                <div class="footer-center col-md-4 col-sm-6">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span> Street name and number</span> Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <p> (+88) 01611374068</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="/"> minhajulabedin648@gmail.com</a></p>
                    </div>
                </div>
                <div class="footer-right col-md-4 col-sm-6">
                    <h2> HitUp</h2>
                    <p class="menu">
                        <a href="/home"> Home</a> |
                        <a href="/about"> About</a> |
                        <a href="/services"> Services</a> |
                        <a href="/"> Portfolio</a> |
                        <a href="/"> News</a> |
                        <a href="/"> Contact</a>
                    </p>
                    <p class="name"> HitUp &copy; {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;