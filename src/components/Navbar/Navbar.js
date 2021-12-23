import React from 'react';
import './Navber.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navber_text">
                <div className="logo"><img src="/img/logo.png" alt="logo" /></div>
                <ul className="navber_ul">
                    <li><a href="">Home</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;