import React from 'react';

import {logo5, vals3 } from '../../../../res/img';
import styles from './BakerDetail.module.css'

const BakerDetail = (props) => {
    const {isDetail, setDetail} = props;
    return (
       <div className={isDetail ? "baker__detail" : "baker__noDetail"}>
            <div className="baker__detail-imgContainer">
                <div className="baker__detail-title">
                    <h2>Company Name</h2>
                </div>
                <img src={vals3} alt="Product" className="baker__detail-img" />
                <div className="baker__detail-img-logoContainer">
                    <img src={logo5} alt="Product" className="baker__detail-img-logo" />
                </div>
            </div>
            <div className="baker__details">
                <h1>About CEO: Tuijah Christian</h1>
                <h1 className="baker__description">Categories</h1>
                <ul className="baker__description-list">
                    <li  className="baker__description-text">Birthday Cakes</li>
                    <li  className="baker__description-text">Wedding Cakes</li>
                    <li  className="baker__description-text">Cookies</li>
                    <li  className="baker__description-text">Valentines</li>
                </ul>
                <h1 className="baker__description">Order: 45</h1>
                <h1 className="baker__description">Biography</h1>
                <p className="baker__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
    )
}

export default BakerDetail;
