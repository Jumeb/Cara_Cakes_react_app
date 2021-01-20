import React from 'react';

import styles from './EventList.module.css';
import { cookies2, cups5, dons2, pans2, vals2, vals1 } from '../../../res/img';
import { Spacer, CreateEvent, EventCard } from '../../../Components';

const EventList = (props) => {
    const {setIsOpen, isDetail, setIsDetail} = props;
    return (
        <div className={isDetail ? "event__listDetail" : "event__list"}>
            <Spacer />
            <EventCard />
            <CreateEvent setIsOpen={setIsOpen}/>
        </div>
    )
}

export default EventList;
