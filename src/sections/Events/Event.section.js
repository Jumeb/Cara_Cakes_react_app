import React from 'react';

import EventList from './EventList/Event.list';
import EventDetail from './EventDetail/Event.detail';
import './Event.section.css'

const EventSection = () => {
    return (
        <div className="event">
            <EventList />
            <EventDetail />
        </div>
    )
}

export default EventSection;
