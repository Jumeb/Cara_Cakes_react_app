import React from 'react';
import { IoPieChartSharp } from 'react-icons/io5';

import styles from './InfoCard.module.css';

const InfoCard = (props) => {
    const {num, com} = props;
    return (
        <div className={styles.infoCard}>
            <b className={styles.infoTitle}>Orders</b>
            <div className={styles.infoStats}>
                <h2 className={styles.infoNumber}>{num}</h2>
                <IoPieChartSharp className={styles.infoIcon} />
            </div>
            <b className={styles.infoRise}>{com}</b>
        </div>
    )
}

export default InfoCard;