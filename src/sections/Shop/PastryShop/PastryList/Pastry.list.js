import React from 'react';
import { Spacer } from '../../../../Components';

import { cookies4, cups2, dons3, logo5, pans4, vals2, vals3 } from '../../../../res/img';
import './Pastry.list.css'

const PastryList = () => {
    return (
        <div className="pastries__list">
            <Spacer />
            <div className="pastry__list-imgContainer">
                <div className="pastry__list-title">
                    <h2>Pastry Name</h2>
                </div>
                <img src={vals3} alt="Product" className="pastry__list-img" />
                <div className="pastry__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="pastry__list-img-logo" />
                </div>
                <div className="pastries__buttonContainer">
                    <button className="pastries__button">Details</button>
                    <button className="pastries__button">Add to cart</button>
                </div>
            </div>
            <div className="pastry__list-imgContainer">
                <div className="pastry__list-title">
                    <h2>Pastry Name</h2>
                </div>
                <img src={vals2} alt="Product" className="pastry__list-img" />
                <div className="pastry__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="pastry__list-img-logo" />
                </div>
                <div className="pastries__buttonContainer">
                    <button className="pastries__button">Details</button>
                    <button className="pastries__button">Add to cart</button>
                </div>
            </div>
            <div className="pastry__list-imgContainer">
                <div className="pastry__list-title">
                    <h2>Pastry Name</h2>
                </div>
                <img src={pans4} alt="Product" className="pastry__list-img" />
                <div className="pastry__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="pastry__list-img-logo" />
                </div>
                <div className="pastries__buttonContainer">
                    <button className="pastries__button">Details</button>
                    <button className="pastries__button">Add to cart</button>
                </div>
            </div>
            <div className="pastry__list-imgContainer">
                <div className="pastry__list-title">
                    <h2>Pastry Name</h2>
                </div>
                <img src={dons3} alt="Product" className="pastry__list-img" />
                <div className="pastry__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="pastry__list-img-logo" />
                </div>
                <div className="pastries__buttonContainer">
                    <button className="pastries__button">Details</button>
                    <button className="pastries__button">Add to cart</button>
                </div>
            </div>
            <div className="pastry__list-imgContainer">
                <div className="pastry__list-title">
                    <h2>Pastry Name</h2>
                </div>
                <img src={cups2} alt="Product" className="pastry__list-img" />
                <div className="pastry__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="pastry__list-img-logo" />
                </div>
                <div className="pastries__buttonContainer">
                    <button className="pastries__button">Details</button>
                    <button className="pastries__button">Add to cart</button>
                </div>
            </div>
            <div className="pastry__list-imgContainer">
                <div className="pastry__list-title">
                    <h2>Pastry Name</h2>
                </div>
                <img src={cookies4} alt="Product" className="pastry__list-img" />
                <div className="pastry__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="pastry__list-img-logo" />
                </div>
                <div className="pastries__buttonContainer">
                    <button className="pastries__button">Details</button>
                    <button className="pastries__button">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default PastryList;
