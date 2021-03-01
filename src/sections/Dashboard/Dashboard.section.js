import React from 'react';
import { InfoCard } from '../../Components';

import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <h2 className={styles.dashTitle}>General Info</h2>
            <div className={styles.dashScroll}>
                <div className={styles.dashOrder}>
                    <InfoCard num={12897} com="All orders" />
                    <InfoCard num={2803} com="Eden" />
                    <InfoCard num={10094} com="C & K" />
                    <InfoCard num={10094} com="C & K" />
                    <InfoCard num={10094} com="C & K" />
                    <InfoCard num={10094} com="C & K" />
                    <InfoCard num={10094} com="C & K" />
                    <InfoCard num={10094} com="C & K" />
                    <InfoCard num={10094} com="C & Kkk" />
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard;
