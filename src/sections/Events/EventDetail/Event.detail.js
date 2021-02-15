import React from 'react';

import styles from './EventDetail.module.css';
import { logo6, vals2 } from '../../../res/img';
import { Button, Link, Spacer } from '../../../Components';

const EventDetail = (props) => {
    const {isDetail, setIsDetail, setIsOpenEdit} = props;
    return (
         <div className={isDetail ? styles.eventDetail : styles.eventNoDetail}>
            <Spacer />
            <div className={styles.eventDetailImgContainer}>
                <div className={styles.eventDetailTitle}>
                    <h2>Purpose</h2>
                </div>
                <img src={vals2} alt="Product" className={styles.eventDetailImg} />
                <div className={styles.eventDetailCountdown}>
                    <h1 className={styles.eventDetailDaysContainer}>
                        <b className={styles.eventDetailDaysNumber}>12</b>
                        <br />
                        <b className={styles.eventDetailDaysText}>Days</b>
                    </h1>
                    <h3 className={styles.eventDetailTimeContainer}>
                        <b className={styles.eventDetailTimeNumber}>12 14 16</b>
                        <br />
                        <b className={styles.eventDetailTimeText}>Hours mins secs</b>
                    </h3>
                </div>
            </div>
            <div className={styles.eventDetails}>
                <h1>For: Tuijah Christian</h1>
                <h1 className={styles.eventDescription}>Cart</h1>
                <ul className={styles.eventDescriptionList}>
                    <li  className={styles.eventDescriptionText}>Birthday Cakes</li>
                    <li  className={styles.eventDescriptionText}>Wedding Cakes</li>
                    <li  className={styles.eventDescriptionText}>Cookies</li>
                    <li  className={styles.eventDescriptionText}>Valentines</li>
                </ul>
                <button className={styles.eventMoreDetails} onClick={() => setIsDetail()}>More Details</button>
                <h1 className={styles.eventDescription}>Reason</h1>
                <p className={styles.eventDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <div className={styles.eventButtons}>
                    <Link danger={true} title="Delete" link="#" />
                    <Button title="Edit" onClick={() => setIsOpenEdit()} />
                </div>
            </div>
        </div>
    )
}

export default EventDetail;
