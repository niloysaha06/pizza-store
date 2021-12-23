import React from 'react';
import './Client.css'

const Client = () => {
    return (
        <div style={{backgroundImage: "url(/img/bg.jpg)"}} className="clients">
            <div className="container-client">
                <div className="row-price">
                <div className="col-3">
                    <div className="client">
                        <h1>120</h1>
                        <p>Awasome Employees</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="client">
                        <h1>58</h1>
                        <p>Pizza Types</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="client">
                        <h1>1468</h1>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="client">
                        <h1>2031</h1>
                        <p>Delivery</p>
                    </div>
                </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Client;