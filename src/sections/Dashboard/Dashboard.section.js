import React from 'react';
import { BakerInfo, InfoCard, UserInfo } from '../../Components';

import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <h2 className={styles.dashTitle}>General Info</h2>
            <div className={styles.dashScroll}>
                <div className={styles.dashContainer}>
                    <InfoCard num={12897} com="All orders" />
                    <InfoCard num={2803} com="Eden" />
                    <InfoCard num={10094} com="C & K" />
                    <InfoCard num={10094} com="C & K" />
                    <InfoCard num={10094} com="C & K" />
                    <InfoCard num={10094} com="C & K" />
                    <InfoCard num={10094} com="C & K" />
                    <InfoCard num={10094} com="C & K" />
                </div>
            </div>
            <h2 className={styles.dashTitle}>Top 10 Bakers</h2>
            <div className={styles.dashScroll}>
                <div className={styles.dashContainer}>
                    <BakerInfo />
                    <BakerInfo />
                    <BakerInfo />
                    <BakerInfo />
                    <BakerInfo />
                    <BakerInfo />
                </div>
            </div>
            <h2 className={styles.dashTitle}>Top 10 Users</h2>
            <div className={styles.dashScroll}>
                <div className={styles.dashContainer}>
                    <UserInfo />
                    <UserInfo />
                    <UserInfo />
                    <UserInfo />
                    <UserInfo />
                    <UserInfo />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
