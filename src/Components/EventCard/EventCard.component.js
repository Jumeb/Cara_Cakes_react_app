import React from 'react';
import { vals2 } from '../../res/img';

import styles from './EventCard.module.css';

const DisplayCard = () => {
    return (
        <div className={styles.eventListImgContainer}>
                <div className={styles.eventListTitle}>
                    <h2>wow</h2>
                </div>
                <img src={vals2} alt="Product" className={styles.eventListImg} />
                <div className={styles.eventListCountdown}>
                    <h1 className={styles.eventListDaysContainer}><p className={styles.eventListDaysNumber}>12</p><p className={styles.eventListDaysText}>Days</p></h1>
                    <h3 className={styles.eventListTimeContainer}><p className={styles.eventListTimeNumber}>12 14 16</p><p className={styles.eventListTimeText}>Hours mins secs</p></h3>
                </div>
                <div className={styles.eventButtonContainer}>
                    <button className={styles.eventButton}>Details</button>
                    <button className={styles.eventButton}>Shop</button>
                </div>
            </div>
    )
}

export default DisplayCard;
