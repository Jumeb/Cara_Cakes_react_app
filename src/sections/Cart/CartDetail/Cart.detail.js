import React from 'react';

import {vals3 } from '../../../res/img';
import './Cart.detail.css';

const CartDetail = (props) => {
    const {isDetail, setIsDetail} = props;

    return (
        <div className={isDetail ? "cart__detail" : "cart__noDetail"}>
            <div className="cart__detail-imgContainer">
                <div className="cart__detail-title">
                    <h2>Pastry name</h2>
                </div>
                <img src={vals3} alt="Product" className="cart__detail-img" />
                <div className="cart__detail-actions">
                    <button className="cart__detail-actionButton fas fa-minus"></button>
                    <p className="cart__detail-qtyText">Quantity: 3</p>
                    <button className="cart__detail-actionButton fas fa-plus"></button>
                </div>
            </div>
            <div className="cart__details">
                <h1>Pastry Details</h1>
                <h1 className="cart__description">Category: Wedding Cake</h1>
                <h1 className="cart__description">Price: 40,000FCFA</h1>
                <h1 className="cart__description">Description</h1>
                <p className="cart__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
    )
}

export default CartDetail;
