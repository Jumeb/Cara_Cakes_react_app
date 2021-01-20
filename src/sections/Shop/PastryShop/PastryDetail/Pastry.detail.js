import React from 'react';

import {logo3, logo5, vals3 } from '../../../../res/img';
import styles from './PastryDetail.module.css'

const PastryDetail = (props) => {
    const {addToCart, isDetail, setIsDetail} = props;
    return (
       <div className={isDetail ? "pastry__detail" : "pastry__noDetail"}>
            <div className="pastry__detail-imgContainer">
                <div className="pastry__detail-title">
                    <h2>Pastry Name</h2>
                </div>
                <img src={vals3} alt="Product" className="pastry__detail-img" />
                <div className="pastry__detail-img-logoContainer">
                    <img src={logo5} alt="Product" className="pastry__detail-img-logo" />
                </div>
                {!addToCart ? (
                    <div className="pastry__detail-actions">
                        <button className="pastry__detail-button">
                            Add to cart
                        </button>
                    </div>                    
                ) : (
                    <div className="pastry__detail-actions">
                        <button className="pastry__detail-actionButton fas fa-minus"></button>
                        <p className="pastry__detail-qtyText">Quantity: 3</p>
                        <button className="pastry__detail-actionButton fas fa-plus"></button>
                    </div>
                ) }
            </div>
            <div className="pastry__details">
                {addToCart && (
                    <input type="text" placeholder="Message on cake" className="pastry__message" />
                )}
                <h1 className="pastry__description">Category</h1>
                <ul className="pastry__description-list">
                    <li  className="pastry__description-text">Birthday Cake</li>
                </ul>
                <h1 className="pastry__description">Ordered: 45</h1>
                <h1 className="pastry__description">About Pastry name</h1>
                <p className="pastry__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
    )
}

export default PastryDetail;
