import React from 'react';

import Profile from '../Profile/Profile.component';
import SearchBar from '../SearchBar/SearchBar.component';
import styles from './WorkArea.module.css';

const WorkArea = (props) => {
    const {children, isDetail} = props;
    return (
        <div className={isDetail ? styles.panelEventDetail : styles.panelEvent}>
            {children}
            <div className={styles.panelEventHeader}>
                <SearchBar />
                <Profile />
            </div>
        </div>
    )
}

export default WorkArea;
