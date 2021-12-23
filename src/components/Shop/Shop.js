import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <div style={{backgroundImage: "url(/img/bg.jpg)"}} className="shop">
            <div className="container-shop">
                <div className="shop_text">
                    <div>
                        <h1>Free Delivery With PIZZA Of The Day Only 8.99 USD</h1>
                        <div className="shop_btn">
                            <a href="" className="btn btn-smart">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;