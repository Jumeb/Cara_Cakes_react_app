import React from 'react';

import { cookies4, cups2, dons3, logo5, pans4, vals2, vals3 } from '../../../../res/img';
import './Baker.list.css'

const BakerList = () => {
    return (
        <div className="bakers__list">
            <div className="baker__list-imgContainer">
                <div className="baker__list-title">
                    <h2>Company Name</h2>
                </div>
                <img src={vals3} alt="Product" className="baker__list-img" />
                <div className="baker__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="baker__list-img-logo" />
                </div>
                <div className="bakers__buttonContainer">
                    <button className="bakers__button">Details</button>
                    <button className="bakers__button">Shop</button>
                </div>
            </div>
            <div className="baker__list-imgContainer">
                <div className="baker__list-title">
                    <h2>Company Name</h2>
                </div>
                <img src={vals2} alt="Product" className="baker__list-img" />
                <div className="baker__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="baker__list-img-logo" />
                </div>
                <div className="bakers__buttonContainer">
                    <button className="bakers__button">Details</button>
                    <button className="bakers__button">Shop</button>
                </div>
            </div>
            <div className="baker__list-imgContainer">
                <div className="baker__list-title">
                    <h2>Company Name</h2>
                </div>
                <img src={pans4} alt="Product" className="baker__list-img" />
                <div className="baker__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="baker__list-img-logo" />
                </div>
                <div className="bakers__buttonContainer">
                    <button className="bakers__button">Details</button>
                    <button className="bakers__button">Shop</button>
                </div>
            </div>
            <div className="baker__list-imgContainer">
                <div className="baker__list-title">
                    <h2>Company Name</h2>
                </div>
                <img src={dons3} alt="Product" className="baker__list-img" />
                <div className="baker__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="baker__list-img-logo" />
                </div>
                <div className="bakers__buttonContainer">
                    <button className="bakers__button">Details</button>
                    <button className="bakers__button">Shop</button>
                </div>
            </div>
            <div className="baker__list-imgContainer">
                <div className="baker__list-title">
                    <h2>Company Name</h2>
                </div>
                <img src={cups2} alt="Product" className="baker__list-img" />
                <div className="baker__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="baker__list-img-logo" />
                </div>
                <div className="bakers__buttonContainer">
                    <button className="bakers__button">Details</button>
                    <button className="bakers__button">Shop</button>
                </div>
            </div>
            <div className="baker__list-imgContainer">
                <div className="baker__list-title">
                    <h2>Company Name</h2>
                </div>
                <img src={cookies4} alt="Product" className="baker__list-img" />
                <div className="baker__list-img-logoContainer">
                    <img src={logo5} alt="Product" className="baker__list-img-logo" />
                </div>
                <div className="bakers__buttonContainer">
                    <button className="bakers__button">Details</button>
                    <button className="bakers__button">Shop</button>
                </div>
            </div>
        </div>
    )
}

export default BakerList;
