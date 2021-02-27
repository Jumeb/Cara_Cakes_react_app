import React from 'react';
import { InfoCard } from '../../Components';

import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div>
                <h2>General Info</h2>
                <InfoCard />
            </div>
        </div>
    )
}

export default Dashboard;
