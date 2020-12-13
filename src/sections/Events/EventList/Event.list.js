import React from 'react';

import './Event.list.css';
import { cookies2, cups5, dons2, pans2, vals2, vals1 } from '../../../res/img';
import { Spacer, CreateEvent } from '../../../Components';

const EventList = (props) => {
    const {setIsOpen, isDetail, setIsDetail} = props;
    return (
        <div className={isDetail ? "event__listDetail" : "event__list"}>
        <Spacer />
            <div className="event__list-imgContainer">
                <div className="event__list-title">
                    <h2>Purpose</h2>
                </div>
                <img src={vals2} alt="Product" className="event__list-img" />
                <div className="event__list-countdown">
                    <h1 className="event__list-days-container"><p className="event__list-days-number">12</p><p className="event__list-days-text">Days</p></h1>
                    <h3 className="event__list-time-container"><p className="event__list-time-number">12 14 16</p><p className="event__list-time-text">Hours mins secs</p></h3>
                </div>
                <div className="event__buttonContainer">
                    <button className="event__button" onClick={() => setIsDetail()}>Details</button>
                    <button className="event__button">Shop</button>
                </div>
            </div>
            <div className="event__list-imgContainer">
                <div className="event__list-title">
                    <h2>Purpose</h2>
                </div>
                <img src={vals1} alt="Product" className="event__list-img" />
                <div className="event__list-countdown">
                    <h1 className="event__list-days-container"><p className="event__list-days-number">12</p><p className="event__list-days-text">Days</p></h1>
                    <h3 className="event__list-time-container"><p className="event__list-time-number">12 14 16</p><p className="event__list-time-text">Hours mins secs</p></h3>
                </div>
                <div className="event__buttonContainer">
                    <button className="event__button">Details</button>
                    <button className="event__button">Shop</button>
                </div>
            </div>
            <div className="event__list-imgContainer">
                <div className="event__list-title">
                    <h2>Purpose</h2>
                </div>
                <img src={pans2} alt="Product" className="event__list-img" />
                <div className="event__list-countdown">
                    <h1 className="event__list-days-container"><p className="event__list-days-number">12</p><p className="event__list-days-text">Days</p></h1>
                    <h3 className="event__list-time-container"><p className="event__list-time-number">12 14 16</p><p className="event__list-time-text">Hours mins secs</p></h3>
                </div>
                <div className="event__buttonContainer">
                    <button className="event__button">Details</button>
                    <button className="event__button">Shop</button>
                </div>
            </div>
            <div className="event__list-imgContainer">
                <div className="event__list-title">
                    <h2>Purpose</h2>
                </div>
                <img src={dons2} alt="Product" className="event__list-img" />
                <div className="event__list-countdown">
                    <h1 className="event__list-days-container"><p className="event__list-days-number">12</p><p className="event__list-days-text">Days</p></h1>
                    <h3 className="event__list-time-container"><p className="event__list-time-number">12 14 16</p><p className="event__list-time-text">Hours mins secs</p></h3>
                </div>
                <div className="event__buttonContainer">
                    <button className="event__button">Details</button>
                    <button className="event__button">Shop</button>
                </div>
            </div>
            <div className="event__list-imgContainer">
                <div className="event__list-title">
                    <h2>Purpose</h2>
                </div>
                <img src={cups5} alt="Product" className="event__list-img" />
                <div className="event__list-countdown">
                    <h1 className="event__list-days-container"><p className="event__list-days-number">12</p><p className="event__list-days-text">Days</p></h1>
                    <h3 className="event__list-time-container"><p className="event__list-time-number">12 14 16</p><p className="event__list-time-text">Hours mins secs</p></h3>
                </div>
                <div className="event__buttonContainer">
                    <button className="event__button">Details</button>
                    <button className="event__button">Shop</button>
                </div>
            </div>
            <div className="event__list-imgContainer">
                <div className="event__list-title">
                    <h2>Purpose</h2>
                </div>
                <img src={cookies2} alt="Product" className="event__list-img" />
                <div className="event__list-countdown">
                    <h1 className="event__list-days-container"><p className="event__list-days-number">12</p><p className="event__list-days-text">Days</p></h1>
                    <h3 className="event__list-time-container"><p className="event__list-time-number">12 14 16</p><p className="event__list-time-text">Hours mins secs</p></h3>
                </div>
                <div className="event__buttonContainer">
                    <button className="event__button">Details</button>
                    <button className="event__button">Shop</button>
                </div>
            </div>
            <CreateEvent setIsOpen={setIsOpen}/>
        </div>
    )
}

export default EventList;
