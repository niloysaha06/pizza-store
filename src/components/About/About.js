import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about">
            <div className="container-about">
                <div className="row">
                     <div className="col-6 p-25">
                      <h3>About Us</h3>
                      <h1>WELCOME TO MAESTED PIZZINI</h1>
                      <p>Investigationes demonstraverunt lectores legere ne lius quod li legunt saepius.Claritas est etism processus dynaus, quise sequitur mutationem consuetudium lectorum.</p>
                      <div className="about-btn">
                      <a href="" className="btn btn-smart">Read More
                      </a>
                      </div>
                     </div>
                    <div className="col-6">
                        <div className="about_img">
                            <img src="/img/pizza.jpg" alt="Pizza" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;