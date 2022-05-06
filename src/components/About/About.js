import React from 'react';
import './About.css';
const About = () => {
    return (
        <div>
            <br /><br /><br />
            <section id="about-section" class="p-100 pb-2 bg-one-dark vh-100">
                <div class="container">
                    <div class="row d-flex align-items-end">
                        <div class="col-md-6 text-center">
                            <img src="https://qiuuing.files.wordpress.com/2015/05/about-me.png" alt="Signature" class="img-fluid" />
                        </div>
                        <div class="col-md-6">
                            <p class="color-base">ABOUT ME!</p>
                            <h2 class="mb-4">Wanna know my goal? I am a <span class="color-base">Junior Developer</span>
                            </h2>
                            <p>I'm a junior Web Developer and graphic designer living in Dhaka. My goal is to become a Full stack Web Developer.
                            </p>
                            <div class="row">
                                <div class="col-md-6 about-bullet">
                                    <ul class="bullet-check">
                                        <li>Different of web development</li>
                                        <li>Intermediate JavaScipt</li>
                                        <li>Different Framework</li>
                                    </ul>
                                </div>
                                <div class="col-md-6 about-bullet">
                                    <ul class="bullet-check">
                                        <li>Graphic designer</li>
                                        <li>React Js Developer</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="wrap-button mt-50">
                                <a href="/" class="btn btn-medium btn-inline btn-fill mr-4">Cv Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;