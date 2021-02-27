import React from 'react';

import styles from './EventList.module.css';
import { Spacer, CreateEvent, EventCard } from '../../../Components';

const EventList = (props) => {
    const {setIsOpen, isDetail, setIsDetail} = props;
    return (
        <div className={isDetail ? styles.eventListDetail : styles.eventList}>
            <EventCard isDetail={isDetail} setIsDetail={setIsDetail} />
            <CreateEvent setIsOpen={setIsOpen}/>
        </div>
    )
}

export default EventList;
