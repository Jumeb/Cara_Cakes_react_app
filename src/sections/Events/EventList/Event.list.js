import React from 'react';

import styles from './EventList.module.css';
import { Spacer, CreateEvent, EventCard, SearchBar, Language, Profile } from '../../../Components';

const EventList = (props) => {
    const {setIsOpen, isDetail, setIsDetail} = props;
    return (
        <div className={styles.eventList}>
            <div className={styles.eventContainer}><EventCard isDetail={isDetail} setIsDetail={setIsDetail} /></div>
            <div className={styles.panelEventHeader}>
                <div className={styles.panelPosition}>
                    <SearchBar />
                    <Language />
                    <Profile />
                </div>
            </div>
            <CreateEvent setIsOpen={setIsOpen}/>
        </div>
    )
}

export default EventList;
