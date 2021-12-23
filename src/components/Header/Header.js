import React from 'react';
import Navbar from '../Navbar/Navbar';

import './Header.css'

const Header = () => {
    return (
        <div style={{backgroundImage: "url(/img/bg.jpg)"}} className="banner" >
            <Navbar></Navbar>
        <div className="banner_content">
            <div className="container">
                <div className="banner_text">
                <h3>Pizza delivery</h3>
                <h1>MAESTRO PIZINNI</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit pariatur magni cumque velit totam voluptates sint vitae at nesciunt commodi</p>
                <div className="banner-btn">
                    <a href="" className="btn btn-smart">Delivary Now</a>
                </div>
                </div>
                
            </div>
        </div>
            
            
             
            
        </div>
    );
};

export default Header;