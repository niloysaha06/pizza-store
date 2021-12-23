import React from 'react';
import './Price.css'

const Price = () => {
    return (
        <div className="prices">
            <div className="container-price">
                <div className="row">
                    <div className="col-4">
                        <div className="price_img">
                            <img src="/img/pizza1.png" alt="pizza" />
                        </div>
                        <h1 className="price-heading">
                            Pizza Margeritta
                        </h1>
                        <p className="price_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit vero dolores tenetur quos.
                        </p>
                        <p className="price_rs">$50.00</p>
                    </div>
                    <div className="col-4">
                        <div className="price_img">
                            <img src="/img/pizza2.png" alt="pizza" />
                        </div>
                        <h1 className="price-heading">
                            Pizza Margeritta
                        </h1>
                        <p className="price_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit vero dolores tenetur quos.
                        </p>
                        <p className="price_rs">$50.00</p>
                    </div>
                    <div className="col-4">
                        <div className="price_img">
                            <img src="/img/pizza3.png" alt="pizza" />
                        </div>
                        <h1 className="price-heading">
                            Pizza Margeritta
                        </h1>
                        <p className="price_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit vero dolores tenetur quos.
                        </p>
                        <p className="price_rs">$50.00</p>
                    </div>
                    <div className="col-4">
                        <div className="price_img">
                            <img src="/img/pizza4.png" alt="pizza" />
                        </div>
                        <h1 className="price-heading">
                            Pizza Margeritta
                        </h1>
                        <p className="price_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit vero dolores tenetur quos.
                        </p>
                        <p className="price_rs">$50.00</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Price;