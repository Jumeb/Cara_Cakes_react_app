import React from 'react';

import './Order.detail.css'
import { vals3, vals4, vals5 } from '../../../res/img';
import { Spacer } from '../../../Components';

const OrderDetail = () => {
    return (
        <div className="order__detail">
            <Spacer />
            <div className="order__detail-imgContainer">
                <div className="order__detail-title">
                    <h2>Order Summary</h2>
                </div>
                <div className="order__detail-imgs">
                    <img src={vals5} alt="Product" className="order__detail-img-1 order__detail-hover" />
                    <img src={vals4} alt="Product" className="order__detail-img-2 order__detail-hover" />
                    <img src={vals3} alt="Product" className="order__detail-img-3 order__detail-hover" />
                </div>
            </div>
            <div className="order__details">
                <h1>Order Details</h1>
                <h1 className="order__description">Order status</h1>
                <ul className="order__description-list">
                    <li  className="order__description-text">Processing</li>
                    <li  className="order__description-text">Registered</li>
                    <li  className="order__description-text">On the way</li>
                    <li  className="order__description-text">Delivered</li>
                </ul>
                <h1 className="order__description">Pastries Ordered</h1>
                <ul className="order__description-list">
                    <li  className="order__description-text">Ice cake</li>
                    <li  className="order__description-text">Fire Cake</li>
                    <li  className="order__description-text">Banana cake</li>
                    <li  className="order__description-text">Cupcakes</li>
                </ul>
                <h1>Total: 193,000FCFA</h1>
            </div>
        </div>
    )
}

export default OrderDetail;
