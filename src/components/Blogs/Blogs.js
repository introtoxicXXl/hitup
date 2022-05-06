import React from 'react';
import './Blogs.css';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.jpg';
import { Link } from 'react-router-dom';
const Blogs = () => {
    return (
        <div>
        {/* blog section */}
            <br /><br /><br />
            <h1 className='mt-5 mb-5 text-center fw-bold'>My blogs</h1>
            <section class="blog-sec container">
                <div class="blog-1 blog">
                    <div class="img">
                        <img src={img1} alt="" />
                    </div>
                    <div class="text">
                        <h1>Difference between authorization and authentication</h1>
                        <p>In basic words, Authorization is the standard and guideline of your demonstration what you can do and what you can't. An illustration of Authorization can be, If you are an administrator you can eliminate a member you have that power. Be that as it may, a member can't eliminate an administrator. Then again, Authentication is a framework by which an individual can be distinguished or checked. Basic authentication does by giving an email and password. For instance, your understudy email address and id are expected to check you by your institutional site. That site affirms you by your email and id which was given by your foundation.</p>
                        <Link to="/blog">continue reading . . .</Link>
                    </div>
                </div>
                <div class="blog-2 blog">
                    <div class="text">
                        <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                        <p>Firebase by Google is fit for to deal with all constant database. I'm utilizing Firebase to Authenticate clients of my own project.I can deal with my private course with firebase authentication.

                            Basically we can execute authentication by Email&Password. We can likewise utilize React firebase snares for that authentication.In Firebase authentication can be carried out by Third party social authentication supplier like Google, Facebook, Play Games, Game Center, Apple, GitHub, Microsoft, Twitter, Yahoo.</p>
                        <Link to="/blog">continue reading . . .</Link>
                    </div>
                    <div class="img">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div class="blog-3 blog">
                    <div class="img">
                        <img src={img3} alt="" />
                    </div>
                    <div class="text">
                        <h1> What other services does firebase provide other than authentication</h1>
                        <p>
                        With the exception of authentication, Google Firebase gives Database by which ongoing information stockpiling, quires, and automatic scaling are conceivable. It likewise gives facilitating administrations. We can convey web applications in seconds liberated from cost. It gives Machine Learning bundles to Android and Apple applications for strong executions. Without having profound information on brain organizations or model advancement designers can have ML highlights in their projects.</p>
                        <Link to="/blog">continue reading . . .</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;