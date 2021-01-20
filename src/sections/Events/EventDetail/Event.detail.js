import React from 'react';

import styles from './EventDetail.module.css';
import { logo6, vals2 } from '../../../res/img';
import { Spacer } from '../../../Components';

const EventDetail = (props) => {
    const {isDetail, setIsDetail, setIsOpenEdit} = props;
    return (
         <div className={isDetail ? "event__detail" : "event__noDetail"}>
             <Spacer />
            <div className="event__detail-imgContainer">
                <div className="event__detail-title">
                    <h2>Purpose</h2>
                </div>
                <img src={vals2} alt="Product" className="event__detail-img" />
                <div className="event__detail-countdown">
                    <h1 className="event__detail-days-container"><p className="event__detail-days-number">12</p><p className="event__detail-days-text">Days</p></h1>
                    <h3 className="event__detail-time-container"><p className="event__detail-time-number">12 14 16</p><p className="event__detail-time-text">Hours mins secs</p></h3>
                </div>
            </div>
            <div className="event__details">
                <h1>For: Tuijah Christian</h1>
                <h1 className="event__description">Cart</h1>
                <ul className="event__description-list">
                    <li  className="event__description-text">Birthday Cakes</li>
                    <li  className="event__description-text">Wedding Cakes</li>
                    <li  className="event__description-text">Cookies</li>
                    <li  className="event__description-text">Valentines</li>
                </ul>
                <button className="event__more-details" onClick={() => setIsDetail()}>More Details</button>
                <h1 className="event__description">Reason</h1>
                <p className="event__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <div className="event__Buttons">
                    <button className="event__Button event__Button-delete">Delete</button>
                    <button className="event__Button" onClick={() => setIsOpenEdit()}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default EventDetail;
