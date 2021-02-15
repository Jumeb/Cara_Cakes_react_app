import React from 'react';
import { Button, Link } from '..';
import { vals2 } from '../../res/img';

import styles from './EventCard.module.css';

const DisplayCard = (props) => {
    const {isDetail, setIsDetail} = props;
    return (
        <div className={styles.eventListImgContainer}>
                <div className={styles.eventListTitle}>
                    <h2>wow</h2>
                </div>
                <img src={vals2} alt="Product" className={styles.eventListImg} />
                <div className={styles.eventListCountdown}>
                    <h1 className={styles.eventListDaysContainer}>
                        <b className={styles.eventListDaysNumber}>12</b>
                        <br />
                        <b className={styles.eventListDaysText}>Days</b>
                    </h1>
                    <h3 className={styles.eventListTimeContainer}>
                        <b className={styles.eventListTimeNumber}>12 14 16</b>
                        <br />
                        <b className={styles.eventListTimeText}>Hours mins secs</b>
                    </h3>
                </div>
                <div className={styles.eventButtonContainer}>
                    <Button title="Details" danger={false} onClick={()=>setIsDetail()} />
                    <Link title="Shop" danger={false} link="/events" />
                </div>
            </div>
    )
}

export default DisplayCard;
